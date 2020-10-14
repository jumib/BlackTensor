import Vue from 'vue'
import Router from 'vue-router'

import wishsearch from '../views/wishsearch'
import mainView from '../mainView'
import totalpage from '../views/toatalpage'
import detailpage from '../views/detailpage'
import wishcart from '../views/wishcart'

import login from '../views/login'
import register from '../views/register'
import mainpage from '../views/mainpage'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  scrollBehavior: () => ({y: 0}),
  mode: 'hash',
  routes: [{
    path: '/',
    redirect: '/mainpage',
    component: mainView,
    children: [
      {
        path: '/mainpage',
        name: 'mainpage',
        component: mainpage
      },
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
        name: totalpage,
        component: totalpage
      },
      {
        path: '/detailpage',
        name: detailpage,
        component: detailpage
      }
    ]
  },
  {
    path: '*',
    redirect: '/pages/error_404',
    component: {
      render (c) {
        return c('router-view')
      }
    },
    children: [
      {
        path: '/login',
        component: login
      },
      {
        path: '/register',
        component: register
      }
    ]
  }
  ]
})

export default router
