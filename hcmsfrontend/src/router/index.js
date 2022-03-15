import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

//=======================  组件引入  ===========================
const index = () => import('@/views/index/index');  // eslint-disable-line no-unused-vars
const login = () => import('@/views/login');

//=======================  组件引入  ===========================
Vue.use(VueRouter);

const routes = [
    {
        path: '',
        redirect: '/index',
        name: 'index',
        component: index
    },
    {
        path: '/login',
        name: 'login',
        component: login
    }
];

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
});

export default router


