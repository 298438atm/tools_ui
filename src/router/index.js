import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/layout/index.vue"),
    redirect: "/index",
    children: [
      {
        path: "/index",
        component: () => import("@/views/Introduction"),
        meta: { title: "引言" },
        name: "Introduction",
      },
      {
        path: "/Muchselect",
        component: () => import("@/views/Muchselect/index"),
        meta: { title: "长下拉数据" },
        name: "Muchselect",
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
