import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _052c1c04 = () => interopDefault(import('..\\pages\\admin.vue' /* webpackChunkName: "pages/admin" */))
const _6181d1f2 = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _569aa816 = () => interopDefault(import('..\\pages\\blog-one.vue' /* webpackChunkName: "pages/blog-one" */))
const _1939507b = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _64178621 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _6e090dd6 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _f4216350 = () => interopDefault(import('..\\pages\\diction-three.vue' /* webpackChunkName: "pages/diction-three" */))
const _20224486 = () => interopDefault(import('..\\pages\\diction-two.vue' /* webpackChunkName: "pages/diction-two" */))
const _13a6e260 = () => interopDefault(import('..\\pages\\gallery-one.vue' /* webpackChunkName: "pages/gallery-one" */))
const _c53729c4 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _4a6ccb3f = () => interopDefault(import('..\\pages\\products.vue' /* webpackChunkName: "pages/products" */))
const _5b82e5b3 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _10caae94 = () => interopDefault(import('..\\pages\\products-details\\_id.vue' /* webpackChunkName: "pages/products-details/_id" */))
const _58866ff2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _052c1c04,
    name: "admin"
  }, {
    path: "/blog-details",
    component: _6181d1f2,
    name: "blog-details"
  }, {
    path: "/blog-one",
    component: _569aa816,
    name: "blog-one"
  }, {
    path: "/cart",
    component: _1939507b,
    name: "cart"
  }, {
    path: "/checkout",
    component: _64178621,
    name: "checkout"
  }, {
    path: "/contact",
    component: _6e090dd6,
    name: "contact"
  }, {
    path: "/diction-three",
    component: _f4216350,
    name: "diction-three"
  }, {
    path: "/diction-two",
    component: _20224486,
    name: "diction-two"
  }, {
    path: "/gallery-one",
    component: _13a6e260,
    name: "gallery-one"
  }, {
    path: "/login",
    component: _c53729c4,
    name: "login"
  }, {
    path: "/products",
    component: _4a6ccb3f,
    name: "products"
  }, {
    path: "/signup",
    component: _5b82e5b3,
    name: "signup"
  }, {
    path: "/products-details/:id?",
    component: _10caae94,
    name: "products-details-id"
  }, {
    path: "/",
    component: _58866ff2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
