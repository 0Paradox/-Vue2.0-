import Vue from 'vue'
import App from './App.vue'
import {Button,Header,Main,Footer,Aside,Container,Menu,Submenu,MenuItem} from 'element-ui'
import {MenuItemGroup,Dropdown,DropdownMenu,DropdownItem,Col,Row,Card} from 'element-ui'
import {Table,TableColumn} from 'element-ui'
import VueRouter from 'vue-router'
import router from './router'
import http from 'axios'
// Radio,Container,Main,Header,Aside
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Button)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(Container)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Col)
Vue.use(Row)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.prototype.$http = http

new Vue({
  render: h => h(App),
  router:router,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
