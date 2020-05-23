import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home',meta: { title: 'Apple(中国大陆) - 官方网站'} },
  { path: '/home', component: Home,meta: { title: 'Apple(中国大陆) - 官方网站'} }
]

const router = new VueRouter({
  routes
})

export default router
