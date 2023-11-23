import Vue from "vue"
import "element-ui/lib/theme-chalk/base.css"
import CollapseTransition from "element-ui/lib/transitions/collapse-transition"
import element from "element-ui"

Vue.use(element)
Vue.component(CollapseTransition.name, CollapseTransition)
