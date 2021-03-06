import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import SingIn from './views/SignIn.vue'
import Restaurants from './views/Restaurants.vue'
import store from './store'
import { async } from 'q'

Vue.use(Router)

const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && !currentUser.isAdmin) {
    next('/404')
    return
  }
}

const router = new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/signin'
    },
    {
      path: '/signin',
      name: 'sign-in',
      component: SingIn
    },
    {
      path: '/signup',
      name: 'sign-up',
      component: () => import('./views/SignUp.vue')
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: Restaurants
    },
    {
      path: '/restaurants/feeds',
      name: 'restaurants-feed',
      component: () => import('./views/RestaurantsFeeds.vue')
    },
    {
      path: '/restaurants/top',
      name: 'restaurants-tops',
      component: () => import('./views/RestaurantsTop.vue')
    },
    {
      path: '/restaurants/:id',
      name: 'restaurant',
      component: () => import('./views/Restaurant.vue')
    },
    {
      path: '/restaurants/:id/dashboard',
      name: 'restaurant-dashboard',
      component: () => import('./views/RestaurantDashboard.vue')
    },
    {
      path: '/users/top',
      name: 'users-top',
      component: () => import('./views/UsersTop.vue')
    },
    {
      path: '/admin',
      exact: true,
      redirect: '/admin/restaurants'
    },
    {
      path: '/admin/categories',
      name: 'admin-categories',
      component: () => import('./views/AdminCategories.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '/admin/restaurants',
      name: 'admin-restaurants',
      component: () => import('./views/AdminRestaurants.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: 'admin/restaurants/new',
      name: 'admin-restaurant-new',
      component: () => import('./views/AdminRestaurantNew.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '/admin/restaurants/:id',
      name: 'admin-restaurant',
      component: () => import('./views/AdminRestaurant.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '/admin/restaurants/:id/edit',
      name: 'admin-restaurant-edit',
      component: () => import('./views/AdminRestaurantEdit.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const tokenInLocalStorage = localStorage.getItem('token')
  const tokenInStore = store.state.token
  let isAuthenticated = store.state.isAuthenticated

  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  const pathsWithoutAuthentication = ['sign-up']
  if (pathsWithoutAuthentication.includes(to.name)) {
    next()
    return
  }
  if (!isAuthenticated && to.name !== 'sign-in') {
    next('/signin')
    return
  }
  if (isAuthenticated && to.name === 'sign-in') {
    next('/restaurants')
    return
  }
  next()
})

export default router
