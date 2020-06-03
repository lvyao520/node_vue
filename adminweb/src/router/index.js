import Vue from 'vue'
import VueRouter from 'vue-router'
const Main = () =>
    import ('../views/Main')
const NewCategory = () =>
    import ('../views/NewCategory')
const CategoryList = () =>
    import ('../views/CategoryList')
const CategoryEdit = () =>
    import ('../views/CategoryEdit')
Vue.use(VueRouter)

// 知识点：解决vue-router3.0版本以上的element菜单重复点击报错的问题，还有一种方法就是讲vue-router安装到3.0版本以下
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    console.log('location:' + location)
    return originalPush.call(this, location).catch(err => err)
}

const routes = [{
        path: '/',
        component: Main,
        redirect: '/newCategory',
        children: [{
            path: '/newCategory',
            component: NewCategory,
        }, {
            path: '/categoryList',
            component: CategoryList
        }, {
            path: '/categotyEdit/:id',
            component: CategoryEdit
        }]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router