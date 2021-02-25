import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAMap from './lib'

Vue.use(VueAMap)

VueAMap.initAMapApiLoader({
  key: '9c581cda99009010a4212703098afe19',
  plugin: [],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.5'
});


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
