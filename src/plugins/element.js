import Vue from 'vue'
import {
  Button, Form, FormItem, Input, Row, Container, Aside, Main, Header,
  Menu, Submenu, MenuItem, Breadcrumb, BreadcrumbItem, Card, Col, Table, TableColumn,
  Switch, Tooltip, Pagination, Dialog, MessageBox
} from 'element-ui'
/* 导入弹框提示组件 */
import { Message } from 'element-ui'

Vue.use(Button)/* 注册为全局可用的组件 */
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Row)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;

