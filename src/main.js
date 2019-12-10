import Vue from 'vue'
import App from './App.vue'
import Ionic from '@ionic/vue'
import '@ionic/core/css/ionic.bundle.css'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(Ionic)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
