
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import layouts from '../components/Layouts/Layouts.vue';

Vue.component('layouts', layouts);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: require('../components/Index.vue').default,
        },
    ],
})
