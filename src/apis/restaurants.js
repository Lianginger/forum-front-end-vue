import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurant(restaurantId) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  },
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },
  getRestaurantsFeeds() {
    return apiHelper.get('/restaurants/feeds')
  },
  getTopRestaurants(){
    return apiHelper.get('/restaurants/top')
  }
}
