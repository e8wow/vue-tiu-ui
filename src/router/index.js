import Vue from 'vue'
import Router from 'vue-router'

import index from '../demo/index.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/demo',
        component: index,
        meta: {
            title: 'vue-tiu-ui'
        },
        children: [{
            path: 'flex',
            component: (resolve) => {
                require(['../demo/flex.vue'], resolve)
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
