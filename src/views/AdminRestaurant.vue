<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <h1>{{restaurant.name}}</h1>
        <p>[{{restaurant.Category.name}}]</p>
      </div>
      <div class="col-md-4">
        <img class="img-responsive center-block" :src="restaurant.image | emptyImage" :alt="restaurant.name" style="width: 250px; margin-bottom: 25px" />
        <div class="well">
          <ul class="list-unstyled">
            <li>
              <strong>Opening Hour:</strong>
              {{restaurant.opening_hours}}
            </li>
            <li>
              <strong>Tel:</strong>
              {{restaurant.tel}}
            </li>
            <li>
              <strong>Address:</strong>
              {{restaurant.address}}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
        <p>{{restaurant.description}}</p>
      </div>
    </div>
    <hr />
    <a href="#" @click="$router.back()">回上一頁</a>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'
const dummyData = {
  restaurant: {
    id: 2,
    name: 'Mrs. Mckenzie Johnston',
    tel: '567-714-6131 x621',
    address: '61371 Rosalinda Knoll',
    opening_hours: '08:00',
    description: 'Quia pariatur perferendis architecto tenetur omnis pariatur tempore.',
    image: 'https://loremflickr.com/320/240/food,dessert,restaurant/?random=2',
    createdAt: '2019-06-22T09:00:43.000Z',
    updatedAt: '2019-06-22T09:00:43.000Z',
    CategoryId: 3,
    Category: {
      id: 3,
      name: '義大利料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    }
  }
}

export default {
  // mixins: [emptyImageFilter],
  data() {
    return {
      restaurant: {}
    }
  },
  mounted() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant(restaurantId) {
      this.restaurant = dummyData.restaurant
    }
  }
}
</script>