import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import "./plugins/element.js"

import tools_ui from "./components/index"
import customCom from "./components/Custom"

Vue.use(tools_ui.MuchSelect)
Vue.use(customCom)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")
