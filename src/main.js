import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
/* 导入字体图标 */
import './assets/css/iconfont.css'
/* 导入弹框提示组件 */
import { Message } from 'element-ui'

import axios from 'axios'
/* 配置请求的根路径 */
axios.defaults.baseURL = 'https://lianghj.top:8888/api/private/v1/'
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.prototype.$message = Message;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
