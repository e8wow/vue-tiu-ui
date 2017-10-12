import Vue from 'vue'
import Router from 'vue-router'

import App from '../App.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: App,
        meta: {
            title: 'vue-tiu-ui'
        },
        children: [{
            path: 'flex',
            component: (resolve) => {
                require(['../page/flex.vue'], resolve)
            },
            meta: {
                title: 'flexBox'
            }
        }]
    }],
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})
