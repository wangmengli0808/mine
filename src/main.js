import Vue from 'vue'
import Vuex from 'vuex'
import VueClipboard from 'vue-clipboard2'
// import axios from 'axios'
import store from './views/store/store'
import 'viewerjs/dist/viewer.css'
import 'font-awesome/css/font-awesome.css'
import Viewer from 'v-viewer'
import common from './common'
import $ from 'jquery';
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import IndexRoutes from './views/routes/Index'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import App from './App.vue'

Vue.use(Vuex);
Vue.use(VueClipboard);
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(Viewer);

// 配置 axios
// Vue.prototype.$http = axios;

// 配置标题栏
Vue.prototype.$common = common;

// 加载 vuer router
Vue.use(VueRouter);
const routes = IndexRoutes;
const router = new VueRouter({
  routes
});

// 懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536574774812&di=c92dcd5be005e49ff9a25a458f19c777&imgtype=0&src=http%3A%2F%2Fimg14.3lian.com%2F201510%2F21%2Faf398caa308168a2f8ce706dabc71934.gif'
});

window.$ = $;
window.jQuery = $;

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
});
