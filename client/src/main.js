import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './dependence'

Vue.config.productionTip = true
Vue.config.devtools = process.env.NODE_ENV === 'development'

/* U框架Ant-design */
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
Vue.use(Antd)

/* 开始业务 */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
