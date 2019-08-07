<template>
  <div class="container py-5">
    <h1>{{restaurant.name}}</h1>
    <p>[{{restaurant.Category.name}}]</p>
    <hr />
    <ul>
      <li>有{{restaurant.viewCounts}}人瀏覽</li>
      <li>有{{restaurant.Comments.length}}筆評論</li>
    </ul>
    <a href="#" @click="$router.go(-1)">回上一頁</a>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: 'Laurence Reynolds',
    tel: '1-657-067-3756 x9782',
    address: '187 Kirlin Squares',
    opening_hours: '08:00',
    description: 'sit est mollitia',
    image: 'https://loremflickr.com/320/240/restaurant,food/?random=91.29816290184887',
    viewCounts: 7,
    createdAt: '2019-07-30T16:24:55.432Z',
    updatedAt: '2019-08-07T08:12:08.128Z',
    CategoryId: 3,
    Category: {
      id: 3,
      name: '義大利料理',
      createdAt: '2019-07-30T16:24:55.429Z',
      updatedAt: '2019-07-30T16:24:55.429Z'
    },
    Comments: [
      {
        id: 1,
        text: 'Sed dolores labore.',
        UserId: 2,
        RestaurantId: 1,
        createdAt: '2019-07-30T16:24:55.451Z',
        updatedAt: '2019-07-30T16:24:55.451Z',
        User: {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password: '$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y',
          isAdmin: false,
          image: 'https://i.imgur.com/Q14p2le.jpg',
          createdAt: '2019-07-30T16:24:55.204Z',
          updatedAt: '2019-08-07T06:16:00.171Z'
        }
      },
      {
        id: 51,
        text: 'Quas accusamus sint blanditiis enim eveniet aliquam vel.',
        UserId: 1,
        RestaurantId: 1,
        createdAt: '2019-07-30T16:24:55.452Z',
        updatedAt: '2019-07-30T16:24:55.452Z',
        User: {
          id: 1,
          name: 'root test',
          email: 'root@example.com',
          password: '$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe',
          isAdmin: true,
          image: 'https://i.imgur.com/58ImzMM.png',
          createdAt: '2019-07-30T16:24:54.983Z',
          updatedAt: '2019-08-07T04:09:56.622Z'
        }
      },
      {
        id: 101,
        text: 'Ipsa vitae voluptas.',
        UserId: 2,
        RestaurantId: 1,
        createdAt: '2019-07-30T16:24:55.453Z',
        updatedAt: '2019-07-30T16:24:55.453Z',
        User: {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password: '$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y',
          isAdmin: false,
          image: 'https://i.imgur.com/Q14p2le.jpg',
          createdAt: '2019-07-30T16:24:55.204Z',
          updatedAt: '2019-08-07T06:16:00.171Z'
        }
      }
    ]
  }
}

export default {
  data() {
    return {
      restaurant: {}
    }
  },
  created() {
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
