<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img class="card-img-top" src="https://via.placeholder.com/300" alt="Card image cap" width="286px" height="180px" />
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link :to="{name: 'restaurant', params: {id:restaurant.id}}">{{restaurant.name}}</router-link>
        </p>
        <span class="badge badge-secondary">{{restaurant.Category.name}}</span>
        <p class="card-text text-truncate">{{restaurant.description}}</p>
      </div>
      <div class="card-footer">
        <button
          v-if="restaurant.isFavorited"
          @click.stop.prevent="deleteFavorite(restaurant.id)"
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
          :disabled="isProcessing"
        >移除最愛</button>
        <button
          v-else
          @click.stop.prevent="addFavorite(restaurant.id)"
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
          :disabled="isProcessing"
        >加到最愛</button>
        <button
          v-if="restaurant.isLiked"
          @click.stop.prevent="deleteLike(restaurant.id)"
          type="button"
          class="btn btn-danger like mr-2"
          :disabled="isProcessing"
        >Unlike</button>
        <button v-else @click.stop.prevent="addLike(restaurant.id)" type="button" class="btn btn-primary like mr-2" :disabled="isProcessing">Like</button>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'

export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      restaurant: this.initialRestaurant,
      isProcessing: false
    }
  },
  methods: {
    async addFavorite(restaurantId) {
      try {
        this.isProcessing = true
        const { data, statusText } = await usersAPI.addFavorite({ restaurantId })
        console.log(data, statusText)
        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }
        this.isProcessing = false
        this.restaurant.isFavorited = true
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          type: 'error',
          title: '無法將餐廳加入最愛，請稍後再試'
        })
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        this.isProcessing = true
        const { data, statusText } = await usersAPI.deleteFavorite({
          restaurantId
        })
        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }
        this.isProcessing = false
        this.restaurant.isFavorited = false
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          type: 'error',
          title: '無法將餐廳從最愛移除，請稍後再試'
        })
      }
    },
    async addLike(restaurantId) {
      try {
        this.isProcessing = true
        const { data, statusText } = await usersAPI.addLike(restaurantId)
        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }
        this.isProcessing = false
        this.restaurant.isLiked = true
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          type: 'error',
          title: '無法將餐廳加入 Like，請稍後再試'
        })
      }
    },
    async deleteLike(restaurantId) {
      try {
        this.isProcessing = true
        const { data, statusText } = await usersAPI.deleteLike(restaurantId)
        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }
        this.isProcessing = false
        this.restaurant.isLiked = false
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          type: 'error',
          title: '無法將餐廳從 Like 移除，請稍後再試'
        })
      }
    }
  }
}
</script>
