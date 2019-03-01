
/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

import './bootstrap';
import Vue from 'vue';

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

import Routes from '@/js/routes';

import App from '@/js/views/App.vue';

const app = new Vue({
    el: '#app',
    router: Routes,
    render: h => h(App),
});

export default app;
