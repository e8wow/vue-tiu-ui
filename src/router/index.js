import Vue from 'vue'
import Router from 'vue-router'

import index from '../demo/index.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: index,
        meta: {
            title: 'vue-tiu-ui'
        }
    }, {
        path: '/alert',
        component: (resolve) => {
            require(['../demo/alert.vue'], resolve)
        },
        meta: {
            title: 'alert'
        }
    }, {
        path: '/dialog',
        component: (resolve) => {
            require(['../demo/dialog.vue'], resolve)
        },
        meta: {
            title: 'dialog'
        }
    }, {
        path: '/flexbox',
        component: (resolve) => {
            require(['../demo/flexbox.vue'], resolve)
        },
        meta: {
            title: 'flexBox'
        }
    }],
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})
