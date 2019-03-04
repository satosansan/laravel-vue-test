
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: require('../components/Index/top.vue').default,
        },
        {
            path: '/tow',
            name: 'index',
            component: require('../components/Index/tow.vue').default,
        },
        {
            path: '/three',
            name: 'index',
            component: require('../components/Index/three.vue').default,
        },
    ],
})
