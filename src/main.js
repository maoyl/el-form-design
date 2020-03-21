import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import elformdesign from './plugin/index'

Vue.config.productionTip = false
 
Vue.use(ElementUI)
Vue.use(elformdesign)

new Vue({
  el: '#app',
  render: h => h(App)
})
