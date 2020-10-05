import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'
import LoginPage from '../views/LoginPage.vue'
import TradeWishPage from '../views/TradeWishPage.vue'
import TradeTotalPage from '../views/TradeTotalPage.vue'
import TradeDetailPage from '../views/TradeDetailPage.vue'
import FindPw from '../views/FindPw.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/LoginPage',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/TradeWishPage',
    name: 'TradeWishPage',
    component: TradeWishPage
  },
  {
    path: '/TradeTotalPage',
    name: 'TradeTotalPage',
    component: TradeTotalPage
  },
  {
    path: '/TradeDetailPage',
    name: 'TradeDetailPage',
    component: TradeDetailPage
  },
  {
    path: '/FindPw',
    name: 'FindPw',
    component: FindPw
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
