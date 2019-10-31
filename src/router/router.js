let router = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  }
]

export default router;