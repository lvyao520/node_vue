import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import NewCategory from '../views/NewCategory'
import CategoryList from '../views/CategoryList'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Main',
        component: Main,
        children: [{
            path: '/newCategory',
            component: NewCategory,
        }, {
            path: '/categoryList',
            component: CategoryList
        }]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router