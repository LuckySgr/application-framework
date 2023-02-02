import {createRouter, createWebHistory} from 'vue-router'
import WelcomePage from "@/views/WelcomePage.vue";
import test from "@/widgets/test/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcomePage',
      component: WelcomePage
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import('../views/Home.vue'),
      // redirect: '/test', // 初始化进来就展示的页面
      children: [
        {
          path: '/test',
          name: 'test',
          component: test
        }
      ]
    }

  ]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  const startActivation = window.sessionStorage.getItem('startActivation');
  if (to.path !== '/') {
    if (!startActivation) {
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }

})

export default router
