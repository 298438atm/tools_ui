import Vue from "vue"
import "element-ui/lib/theme-chalk/base.css"
import CollapseTransition from "element-ui/lib/transitions/collapse-transition"
import {
  Button,
  Select,
  Option,
  OptionGroup,
  Aside,
  Container,
  Main,
  Header,
  Tag,
  Table,
  TableColumn,
  Tabs,
  TabPane,
  Card,
  Scrollbar,
  Link,
} from "element-ui"

Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Container)
Vue.use(Main)
Vue.use(Tag)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Card)
Vue.use(Scrollbar)
Vue.use(Link)
Vue.component(CollapseTransition.name, CollapseTransition)
