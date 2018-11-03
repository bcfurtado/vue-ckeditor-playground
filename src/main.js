import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import CKEditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import App from './App.vue'
import AppRouter from './router.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

Vue.use( CKEditor, {
  editors: {
    classic: ClassicEditor
  },
});

new Vue({
  el: '#app',
  router: AppRouter,
  render: h => h(App)
})
