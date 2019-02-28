import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import one from './views/menu1.vue'
import two from './views/menu2.vue'
import login from './views/login.vue'
import regisiter from './views/regisiter.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/one',
            name: 'one',
            component: one,
            children: [{
                    path: 'login/:userid',
                    component: login,
                    name: 'login'
                },
                {
                    path: 'regisiter',
                    component: regisiter
                }
            ]
        },
        {
            path: '/two',
            name: 'two',
            component: two
        },
    ]
})