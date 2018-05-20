import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter);

/* 非懒加载
import one from './components/one.vue'
import two from './components/two.vue'
import three from './components/three.vue'
import { resolve } from 'path';

component: one / two / three
*/
/* 
懒加载
component: resolve => require(['./components/name.vue'], resolve)
*/

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/one',
      component: resolve => require(['./components/one.vue'], resolve)
    },
    {
      path: '/two',
      component: resolve => require(['./components/two.vue'], resolve)
    },
    {
      path: '/three',
      component: resolve => require(['./components/three.vue'], resolve)
    },
    {
      path: '/donate',
      component: resolve => require(['./components/donate.vue'], resolve)
    }
  ]
});

const app = new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
}).$mount('#app')
