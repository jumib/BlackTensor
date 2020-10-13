import Vue from 'vue'
import Router from 'vue-router'

import wishsearch from '../views/wishsearch'
import mainView from '../mainView'
import totalpage from '../views/toatalpage'
import detailpage from '../views/detailpage'
import wishcart from '../views/wishcart'

import login from '../views/samples/user-pages/login'
import register from '../views/samples/user-pages/register'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  mode: 'hash',
  routes: [{
    path: '/',
    redirect: '/totalpage',
    component: mainView,
    children: [
      {
        path: '/wishsearch',
        name: 'wishsearch',
        component: wishsearch
      },
      {
        path: '/wishcart',
        name: 'wishcart',
        component: wishcart
      },
      {
        path: '/totalpage',
        component: totalpage
      },
      {
        path: '/detailpage',
        component: detailpage
      }
    ]
  },
  {
    path: '*',
    redirect: '/pages/error_404',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: '/pages/login',
        component: login
      },
      {
        path: '/pages/register',
        component: register
      }
    ]}
  ]
})
