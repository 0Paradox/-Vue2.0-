import Vue from 'vue'
import App from './App.vue'
import {Button,Header,Main,Footer,Aside,Container,Menu,Submenu,MenuItem, Message} from 'element-ui'
import {MenuItemGroup,Dropdown,DropdownMenu,DropdownItem,Col,Row,Card} from 'element-ui'
import {Table,TableColumn,Breadcrumb,BreadcrumbItem,Tag,Form,FormItem} from 'element-ui'
import {Input,Select,Option,Switch,DatePicker,Dialog,Pagination,MessageBox} from 'element-ui'
import VueRouter from 'vue-router'
import router from './router'
import http from 'axios'
import store from './store/index'
import '../api/mock.js'
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
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(DatePicker)
Vue.use(Switch)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Pagination)
Vue.use(MessageBox)
Vue.prototype.$http = http

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$message = Message
    Vue.prototype.$confirm = MessageBox.confirm
  }
}).$mount('#app')
