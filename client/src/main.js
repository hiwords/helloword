import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false



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
