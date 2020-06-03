import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue';
import Home_welcome from '../components/Home_welcome.vue';
import Iphone11 from '../components/Iphone11.vue';
import Mac from '../components/Mac.vue';
import Ipad from '../components/Ipad.vue';
import Watch from '../components/Watch.vue';
import Music from '../components/Music.vue';
import Skill from '../components/Skill.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/Home_welcome',meta: { title: 'Apple(中国大陆) - 官方网站'} },
  { path: '/home', component: Home,meta: { title: 'Apple(中国大陆) - 官方网站'},children:[
    { path: '/Home_welcome', component: Home_welcome },
    { path: '/Iphone11', component: Iphone11 },
    { path: '/Mac', component: Mac },
    { path: '/Ipad', component: Ipad },
    { path: '/Watch', component: Watch },
    { path: '/Music', component: Music },
    { path: '/Skill', component: Skill },
  ] }
]

const router = new VueRouter({
  routes
})

export default router
