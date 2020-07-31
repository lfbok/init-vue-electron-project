import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import { Icon,MessageBox } from 'element-ui';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(Icon)


/* eslint-disable no-new */
Vue.prototype.$confirm = MessageBox.confirm
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
