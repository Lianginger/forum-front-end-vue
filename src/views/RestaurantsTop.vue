<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <hr />
    <div
      v-for="(restaurant, index) in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px; margin: auto"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img :src="restaurant.image" :alt="restaurant.name" class="card-image" />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{restaurant.name}}</h5>
            <span class="badge badge-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
            <p class="card-text"></p>
            <router-link
              :to="{name: 'restaurant', params: {id:restaurant.id}}"
              class="btn btn-primary mr-2"
            >Show</router-link>
            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click="deleteFavorite(index)"
            >移除最愛</button>
            <button v-else type="button" class="btn btn-primary" @click="addFavorite(index)">加到最愛</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs'
import restaurantAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'

export default {
  components: {
    NavTabs
  },
  data() {
    return {
      restaurants: []
    }
  },
  created() {
    this.fetchRestaurantTops()
  },
  methods: {
    async fetchRestaurantTops() {
      try {
        const { data, statusText } = await restaurantAPI.getTopRestaurants()

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }
        this.restaurants = data.restaurants
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
        console.log('error', error)
      }
    },
    deleteFavorite(index) {
      this.restaurants[index].isFavorited = false
    },
    addFavorite(index) {
      this.restaurants[index].isFavorited = true
    }
  }
}
</script>
