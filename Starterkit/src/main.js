import { createApp } from 'vue';
import App from './App.vue';
import { vMaska } from "maska"
import * as VueGoogleMaps from 'vue3-google-map';
import VueSweetalert2 from 'vue-sweetalert2';
import Vue3ApexCharts from 'vue3-apexcharts';
import router from './router/index';
import store from '@/state/store';
import vco from "v-click-outside";
import BootstrapVueNext from 'bootstrap-vue-next';
import vueChartist from 'vue-chartist'

import "@/design/index.scss";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import '@/design/app.scss';
import "@vueform/multiselect/themes/default.css"

import { initFirebaseBackend } from './authUtils';
import { configureFakeBackend } from './helpers/fake-backend';
import VueCookies from 'vue-cookies';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_apiKey,
  authDomain: process.env.VUE_APP_authDomain,
  databaseURL: process.env.VUE_APP_databaseURL,
  projectId: process.env.VUE_APP_projectId,
  storageBucket: process.env.VUE_APP_storageBucket,
  messagingSenderId: process.env.VUE_APP_messagingSenderId,
  appId: process.env.VUE_APP_appId,
  measurementId: process.env.VUE_APP_measurementId
};

if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
  initFirebaseBackend(firebaseConfig);
} else {
  configureFakeBackend();
}

createApp(App)
  .use(router)
  .use(store)
  .use(BootstrapVueNext)
  .directive("maska", vMaska)
  .use(VueSweetalert2)
  .use(vueChartist)
  .use(vco)
  .use(Vue3ApexCharts)
  .use(VueCookies)
  .use(VueGoogleMaps, {
    load: {
      apiKey: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE',
      libraries: 'places',
    },
    installComponents: true
  })
  .mount('#app');



