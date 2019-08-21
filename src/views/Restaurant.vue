<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 -->
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 -->
    <RestaurantComments :restaurant-comments="restaurantComments" @after-delete-comment="afterDeleteComment" />
    <hr />
    <!-- 新增評論 -->
    <CreateComment :restaurant-id="restaurant.id" @after-create-comment="afterCreateComment" />
  </div>
</template>

<script>
import RestaurantDetail from '../components/RestaurantDetail'
import RestaurantComments from '../components/RestaurantComments'
import CreateComment from '../components/CreateComment'
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'
import restaurants from '../apis/restaurants'
import { mapState } from 'vuex'

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: []
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurants(restaurantId)
  },
  beforeRouteUpdate(to, from, next) {
    const { id: restaurantId } = to.params
    this.fetchRestaurants(restaurantId)
    next()
  },
  methods: {
    async fetchRestaurants(restaurantId) {
      try {
        const { data, statusText } = await restaurantsAPI.getRestaurant(restaurantId)

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        this.restaurant = {
          id: data.restaurant.id,
          name: data.restaurant.name,
          categoryName: data.restaurant.Category.name,
          image: data.restaurant.image,
          openingHours: data.restaurant.opening_hours,
          tel: data.restaurant.tel,
          address: data.restaurant.tel,
          description: data.restaurant.description,
          isFavorited: data.isFavorited,
          isLiked: data.isLiked
        }

        this.restaurantComments = data.restaurant.Comments
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
      console.log('fetchRestaurants id: ', restaurantId)
    },
    afterDeleteComment(commentId) {
      this.restaurantComments = this.restaurantComments.filter(comment => comment.id !== commentId)
    },
    afterCreateComment(payload) {
      console.log('fff')
      const { commentId, restaurantId, text } = payload
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        createdAt: new Date()
      })
    }
  }
}
</script>
