import store from '@/state/store'

export default [{
    path: '/',
    meta: {
        authRequired: true
    },
    name: 'home',
    component: () => import('./views/home'),
},
{
    path: '/login',
    name: 'login',
    component: () => import('./views/account/login'),
    meta: {
        title: "Login",
        beforeResolve(routeTo, routeFrom, next) {
            // If the user is already logged in
            if (store.getters['auth/loggedIn']) {
                // Redirect to the home page instead
                next({
                    name: 'home'
                })
            } else {
                // Continue to the login page
                next()
            }
        },
    },
},
{
    path: '/register',
    name: 'register',
    component: () => import('./views/account/register'),
    meta: {
        title: "Register",
        beforeResolve(routeTo, routeFrom, next) {
            // If the user is already logged in
            if (store.getters['auth/loggedIn']) {
                // Redirect to the home page instead
                next({
                    name: 'home'
                })
            } else {
                // Continue to the login page
                next()
            }
        },
    },
},
{
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('./views/account/forgot-password'),
    meta: {
        title: "Forgot password",
        beforeResolve(routeTo, routeFrom, next) {
            // If the user is already logged in
            if (store.getters['auth/loggedIn']) {
                // Redirect to the home page instead
                next({
                    name: 'home'
                })
            } else {
                // Continue to the login page
                next()
            }
        },
    },
},
{
    path: '/logout',
    name: 'logout',
    meta: {
        title: "Logout",
        authRequired: true,
        beforeResolve(routeTo, routeFrom, next) {
            if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
                store.dispatch('auth/logOut')
            } else {
                store.dispatch('authfack/logout')
            }
            const authRequiredOnPreviousRoute = routeFrom.matched.some(
                (route) => route.push('/login')
            )
            // Navigate back to previous page, or home as a fallback
            next(authRequiredOnPreviousRoute ? {
                name: 'default'
            } : {
                ...routeFrom
            })
        },
    },
},
{
    path: '/pages/blank-page',
    name: 'Blank page',
    meta: { title: "Blank Page", authRequired: true },
    component: () => import('./views/pages/blank'),
},
{
    path: '/pages/game-demo',
    name: 'Game Demo',
    meta: { title: "Game Demo", authRequired: false },
    component: () => import('./views/pages/gamedemo'),
},
{
    path: '/pages/404',
    name: 'Page-404',
    meta: { title: "Page 404", authRequired: true },
    component: () => import('./views/pages/error-404'),
},
{
    path: '/pages/500',
    name: 'Page-500',
    meta: { title: "Page 500", authRequired: true },
    component: () => import('./views/pages/error-500'),
},
{
    path: '/pages/maintenance',
    name: 'Maintenance',
    meta: { title: "Maintenance Page", authRequired: true },
    component: () => import('./views/pages/maintenance'),
},
{
    path: '/pages/login-1',
    name: 'Login-1',
    meta: { title: "Login", authRequired: true },
    component: () => import('./views/pages/login-1'),
},
{
    path: '/pages/login-2',
    name: 'Login-2',
    meta: { title: "Login 2", authRequired: true },
    component: () => import('./views/pages/login-2'),
},
{
    path: '/pages/register-1',
    name: 'Register-1',
    meta: { title: "Register", authRequired: true },
    component: () => import('./views/pages/register-1'),
},
{
    path: '/pages/register-2',
    name: 'Register-2',
    meta: { title: "Register 2", authRequired: true },
    component: () => import('./views/pages/register-2'),
},
{
    path: '/pages/recoverpwd-1',
    name: 'Recover Password 1',
    meta: { title: "Recover Password", authRequired: true },
    component: () => import('./views/pages/recoverpwd-1'),
},
{
    path: '/pages/recoverpwd-2',
    name: 'Recover Password 2',
    meta: { title: "Recover Password 2", authRequired: true },
    component: () => import('./views/pages/recoverpwd-2'),
},
{
    path: '/pages/lock-screen1',
    name: 'Lock-screen 1',
    meta: { title: "Lock Screen 1", authRequired: true },
    component: () => import('./views/pages/lock-screen1'),
},
{
    path: '/pages/lock-screen2',
    name: 'Lock-screen 2',
    meta: { title: "Lock Screen 2", authRequired: true },
    component: () => import('./views/pages/lock-screen2'),
},
]