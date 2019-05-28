import Vue from 'vue'
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';

import App from 'View/App.vue'
import router from './config/router'
import store from './store'

Vue.use(VueRouter);
Vue.use(Vuetify);

import 'vuetify/dist/vuetify.min.css'

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
})