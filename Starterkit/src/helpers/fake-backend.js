import Vue from 'vue'
import VueCookies from 'vue-cookies'

// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users'))
    || [{ username: "admin", email: "admin2@themesbrand.com", password: "123456" }];

export function configureFakeBackend() {
     // default options config: { expires: '1d', path: '/', domain: '', secure: '', sameSite: 'Lax' }
                

    let realFetch = window.fetch;
    window.fetch = function (url, opts) {

        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                // authenticate
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);

                    // find if any user matches login credentials
                    let filteredUsers = users.filter(user => {
                        return user.email === params.email && user.password === params.password;
                    });


                    //////////Fake drupal oauth user - grab and store in local storage.. local 
                    /////local storage is not secure for demo purposed only. SPA/decoupled apps should use 
                    ////// a token handler pattern approach - https://curity.io/resources/learn/the-token-handler-pattern/?utm_source=thenewstack&utm_medium=website&utm_content=inline-mention&utm_campaign=platform
                    
                    if (filteredUsers.length) {
                        // if login details are valid return user details and fake jwt token
                        // for example only passing in drupal login details for bearer token
                        const username = process.env.VUE_APP_DRUPAL_USER;
                        const pass = process.env.VUE_APP_DRUPAL_PASS;
                        const client_secret = process.env.VUE_APP_CLIENT_SECRET;
                        const client_id = process.env.VUE_APP_NOT_CLIENT_ID;
                        const drupaloath = 'https://dev-gametest.pantheonsite.io/oauth/token';

                        var oauthdetails = {
                            'grant_type': 'password',
                            'username': username,
                            'password': pass,
                            'client_id': client_id,
                            'client_secret': client_secret,
                        };

                        var accesstoken = '';
                        var formBody = [];
                        for (var property in oauthdetails) {
                          var encodedKey = encodeURIComponent(property);
                          var encodedValue = encodeURIComponent(oauthdetails[property]);
                          formBody.push(encodedKey + "=" + encodedValue);
                        }
                        formBody = formBody.join("&");

                        fetch(drupaloath, {
                        mode:  'cors',
                        method: "post",
                        headers: {
                            'Accept': 'application/vnd.api+json',
                            //'Content-Type': 'application/json'
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                        },

                        //make sure to serialize your JSON body
                        body: formBody
                        })
                        .then((response) => response.json())
                        .then((json) => {accesstoken = json.access_token; console.log('test');localStorage.setItem( 'drupaltoken', accesstoken);})
                        

                        //.then( (response) => { 
                        //do something awesome that makes the world a better place
                        //});

                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            username: user.username,
                            name: user.name,
                            email: user.email,
                            token: 'fake-jwt-token'
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        // else return error
                        reject('These credentials do not match our records.');
                    }
                    return;
                }

                // get users
                if (url.endsWith('/users') && opts.method === 'GET') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users)) });
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // get user by id
                if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        let matchedUsers = users.filter(user => { return user.id === id; });
                        let user = matchedUsers.length ? matchedUsers[0] : null;

                        // respond 200 OK with user
                        resolve({ ok: true, text: () => JSON.stringify(user) });
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // register user
                if (url.endsWith('/users/register') && opts.method === 'POST') {
                    // get new user object from post body
                    let newUser = JSON.parse(opts.body);
                    // validation
                    let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
                    if (duplicateUser) {
                        reject("Username '" + newUser.username + "' is already taken");
                        return;
                    }

                    // save new user
                    newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));

                    // respond 200 OK
                    resolve({ ok: true, text: () => Promise.resolve() });

                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}