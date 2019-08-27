<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">最新動態</h1>
      <hr />
      <div class="row">
        <div class="col-md-6">
          <h3>最新餐廳</h3>
          <NewestRestaurants :restaurants="restaurants" />
        </div>
        <div class="col-md-6">
          <h3>最新評論</h3>
          <NewestCommets :comments="comments" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs'
import NewestRestaurants from '../components/NewestRestaurant'
import NewestCommets from '../components/NewestComment'
import restaurantsAPI from '../apis/restaurants'
import Spinner from '../components/Spinner'

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestCommets,
    Spinner
  },
  data() {
    return {
      restaurants: [],
      comments: [],
      isLoading: true
    }
  },
  created() {
    this.fetchFeeds()
  },
  methods: {
    async fetchFeeds() {
      try {
        const { data, statusText } = await restaurantsAPI.getRestaurantsFeeds()
        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        this.isLoading = false
        this.restaurants = data.restaurants
        this.comments = data.comments
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          type: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    }
  }
}
</script>

