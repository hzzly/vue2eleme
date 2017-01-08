// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Goods from 'components/goods/goods'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'

import 'common/style/index.scss'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  { path: '/goods', component: Goods },
  { path: '/ratings', component: Ratings },
  { path: '/seller', component: Seller }
]

const router = new VueRouter({
	linkActiveClass: 'active',
  	routes // （缩写）相当于 routes: routes
})

router.push('/goods')

const app = new Vue({
  router: router,
  render:h => h(App)
}).$mount('#app')


// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
