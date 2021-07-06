import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'
import { setPageTitleMiddleware } from './middlewares'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkExactActiveClass: "is-active",
  routes
})

router.beforeEach(setPageTitleMiddleware)

export default router