import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import SingIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/signin',
      name: 'sign-in',
      component: SingIn
    },
    {
      path: '/signup',
      name: 'sign-up',
      component: SignUp
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
