import Vue from 'vue'
import App from './App.vue'
import router from "./router";

Vue.config.productionTip = false

//阻止页面整体被拖动
// document.body.addEventListener('touchmove', function (e) {
//   e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
// }, {passive: false}); //passive 参数不能省略，用来兼容ios和android

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
