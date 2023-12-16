import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/layout/index.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: () => import('@/views/IntroductionDoc'),
        meta: { title: '引言' },
        name: 'Introduction'
      },
      {
        path: '/Muchselect',
        component: () => import('@/views/MuchSelectDoc'),
        meta: { title: '长下拉数据' },
        name: 'Muchselect'
      },
      {
        path: '/IconSelectDoc',
        component: () => import('@/views/IconSelectDoc'),
        meta: { title: '图标下拉' },
        name: 'IconSelectDoc'
      },
      {
        path: '/TableForm',
        component: () => import('@/views/TableFormDoc'),
        meta: { title: '表格式表单' },
        name: 'TableFormDoc'
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
