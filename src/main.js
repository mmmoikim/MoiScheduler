import Vue from 'vue'
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';

import App from 'View/App.vue'
import router from './config/router'
import store from './store'
import colors from 'vuetify/es5/util/colors'

Vue.use(VueRouter);
Vue.use(Vuetify, {
    theme: {
        primary: colors.indigo,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3
    }
});

import 'vuetify/dist/vuetify.min.css'

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
})