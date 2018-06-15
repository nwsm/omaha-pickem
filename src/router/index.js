import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import store from '../store'

import Main from '@/components/Main'
import Home from '@/components/Home'
import ViewBrackets from '@/components/ViewBrackets'
import Bracket from '@/components/Bracket'
import AuthReddit from '@/components/AuthReddit'

Vue.use(Router)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router';

const router = new VueRouter({
  routes: [
    {
      path: '/Main',
      name: 'Main',
      component: Main,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ViewBrackets',
      name: 'ViewBrackets',
      component: ViewBrackets
    },
    {
      path: '/Bracket/:bracketId',
      name: 'Bracket',
      component: Bracket,
      props: true
    },
    {
      path: '/Auth/Reddit',
      name: 'AuthReddit',
      component: AuthReddit,
      props: true
    }
  ]
})

router.beforeEach((to,from,next) => {
  const currentUser = store.state.user
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if(to.path.substring(0,7) == '/access'){
    var token = to.path.substring(14,to.path.indexOf('&'))
    next('/Auth/Reddit#access_token='+token)
  }
  if (requiresAuth && !currentUser) {
    next('/');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }

})
export default router;
