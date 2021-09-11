import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  /*{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  }*/
    /*项目 默认根目录引导 首页*/
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
},
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
    /*404路径访问 错误处理机制*/
  { path:'/:pathMatch(.*)',
    redirect: '/404',
  },
  {
    path:'/404',
    name:'404',
    component: () => import( '../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
/*需要在前端路由 添加路由守卫  对token登录状态予以判断*/
// 路由守卫
router.beforeEach(((to, from, next) => {
  if(to.path === "/home"||to.path === "/") {
    next();
  } else {
    /*判断交互过程中 token登录状态的记录*/
    let token = localStorage.getItem('token');
    if (token === null || token === ''||token===undefined) {
      /*没有登录状态 表示当前用户未登录 则返回项目登录 首页*/
      next('/home');
    } else {
      /*存在token手令 表示当前用户已登录  访问路径放行*/
      next();
    }
  }
}))

export default router
