require('./bootstrap');

import Vue from "vue";
import App from "./components/app"
import router from './router'

// Vuetify
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
    theme: {
        primary: colors.indigo.base,
        secondary: colors.blue.base,
        accent: colors.amber.base,
    }
});

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

const app = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});
