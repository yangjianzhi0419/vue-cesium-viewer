import Vue from 'vue'
import App from './App.vue'

import { Viewer } from 'vue-cesium-viewer'
Vue.use(Viewer)

window.Cesium = Cesium;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
