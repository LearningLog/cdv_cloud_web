// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Cookies from 'js-cookie'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import 'element-ui/lib/theme-chalk/index.css'
// import '@/styles/index.scss' // global css
import Vue from 'vue'
import App from './App'
import router from './router'
// 生成二维码
import VueQriously from 'vue-qriously'

Vue.config.productionTip = false

Vue.use(ElementUI, { size: Cookies.get('size') || 'small' }, { locale })
Vue.use(VueQriously)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
