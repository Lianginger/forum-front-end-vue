<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <hr />
    <div v-for="(restaurant, index) in restaurants" :key="restaurant.id" class="card mb-3" style="max-width: 540px; margin: auto">
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
            <router-link :to="{name: 'restaurant', params: {id:restaurant.id}}" class="btn btn-primary mr-2">Show</router-link>
            <button v-if="restaurant.isFavorited" type="button" class="btn btn-danger mr-2" @click="deleteFavorite(index)">移除最愛</button>
            <button v-else type="button" class="btn btn-primary" @click="addFavorite(index)">加到最愛</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs'

const dummyData = {
  restaurants: [
    {
      id: 19,
      name: 'Dustin Lynch',
      tel: '1-382-742-2344 x941',
      address: '102 Johnson Camp',
      opening_hours: '08:00',
      description: 'Veritatis quae ad id amet. Similique est suscipit.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=19.604747512748677',
      viewCounts: null,
      createdAt: '2019-07-30T16:24:55.436Z',
      updatedAt: '2019-07-30T16:24:55.436Z',
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 1,
          name: 'root test',
          email: 'root@example.com',
          password: '$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe',
          isAdmin: true,
          image: 'https://i.imgur.com/58ImzMM.png',
          createdAt: '2019-07-30T16:24:54.983Z',
          updatedAt: '2019-08-07T04:09:56.622Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 19,
            createdAt: '2019-08-05T12:58:02.933Z',
            updatedAt: '2019-08-05T12:58:02.933Z'
          }
        },
        {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password: '$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y',
          isAdmin: false,
          image: 'https://i.imgur.com/Q14p2le.jpg',
          createdAt: '2019-07-30T16:24:55.204Z',
          updatedAt: '2019-08-07T06:16:00.171Z',
          Favorite: {
            UserId: 2,
            RestaurantId: 19,
            createdAt: '2019-08-05T09:07:28.598Z',
            updatedAt: '2019-08-05T09:07:28.598Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 2
    },
    {
      id: 25,
      name: 'Austen Runte Jr.',
      tel: '(111) 281-9830 x0839',
      address: '76697 Greenfelder Isle',
      opening_hours: '08:00',
      description: 'Incidunt voluptas quo. Et tempora facere totam odi',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=47.68607895620682',
      viewCounts: null,
      createdAt: '2019-07-30T16:24:55.438Z',
      updatedAt: '2019-07-30T16:24:55.438Z',
      CategoryId: 3,
      FavoritedUsers: [
        {
          id: 1,
          name: 'root test',
          email: 'root@example.com',
          password: '$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe',
          isAdmin: true,
          image: 'https://i.imgur.com/58ImzMM.png',
          createdAt: '2019-07-30T16:24:54.983Z',
          updatedAt: '2019-08-07T04:09:56.622Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 25,
            createdAt: '2019-08-05T12:58:21.519Z',
            updatedAt: '2019-08-05T12:58:21.519Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 5,
      name: 'Niko Bahringer',
      tel: '1-068-049-4717 x2744',
      address: '555 Pagac Extension',
      opening_hours: '08:00',
      description: 'Ea expedita hic facilis qui. Quibusdam vel non at ',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=92.97546946757748',
      viewCounts: null,
      createdAt: '2019-07-30T16:24:55.433Z',
      updatedAt: '2019-07-30T16:24:55.433Z',
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 1,
          name: 'root test',
          email: 'root@example.com',
          password: '$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe',
          isAdmin: true,
          image: 'https://i.imgur.com/58ImzMM.png',
          createdAt: '2019-07-30T16:24:54.983Z',
          updatedAt: '2019-08-07T04:09:56.622Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 5,
            createdAt: '2019-08-05T12:57:33.116Z',
            updatedAt: '2019-08-05T12:57:33.116Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 11,
      name: 'Haley Trantow',
      tel: '(919) 824-7063 x83066',
      address: '86902 Yost Parks',
      opening_hours: '08:00',
      description: 'Nam ipsum magnam quia.\nCulpa voluptate ducimus und',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=45.89406888977074',
      viewCounts: null,
      createdAt: '2019-07-30T16:24:55.435Z',
      updatedAt: '2019-07-30T16:24:55.435Z',
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 1,
          name: 'root test',
          email: 'root@example.com',
          password: '$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe',
          isAdmin: true,
          image: 'https://i.imgur.com/58ImzMM.png',
          createdAt: '2019-07-30T16:24:54.983Z',
          updatedAt: '2019-08-07T04:09:56.622Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 11,
            createdAt: '2019-08-05T12:54:50.093Z',
            updatedAt: '2019-08-05T12:54:50.093Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 39,
      name: 'Johnpaul Keeling',
      tel: '(237) 706-1277',
      address: '9844 McCullough Village',
      opening_hours: '08:00',
      description: 'Ut id numquam numquam ut qui sed qui consequatur. ',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=39.32881737000879',
      viewCounts: null,
      createdAt: '2019-07-30T16:24:55.441Z',
      updatedAt: '2019-07-30T16:24:55.441Z',
      CategoryId: 2,
      FavoritedUsers: [
        {
          id: 1,
          name: 'root test',
          email: 'root@example.com',
          password: '$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe',
          isAdmin: true,
          image: 'https://i.imgur.com/58ImzMM.png',
          createdAt: '2019-07-30T16:24:54.983Z',
          updatedAt: '2019-08-07T04:09:56.622Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 39,
            createdAt: '2019-08-05T09:10:04.604Z',
            updatedAt: '2019-08-05T09:10:04.604Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 27,
      name: 'Penelope Mayert DDS',
      tel: '1-775-369-6229',
      address: '52148 Susan Pike',
      opening_hours: '08:00',
      description: 'non nobis quo',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=77.93437663958767',
      viewCounts: 2,
      createdAt: '2019-07-30T16:24:55.439Z',
      updatedAt: '2019-08-06T23:46:58.706Z',
      CategoryId: 1,
      FavoritedUsers: [
        {
          id: 1,
          name: 'root test',
          email: 'root@example.com',
          password: '$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe',
          isAdmin: true,
          image: 'https://i.imgur.com/58ImzMM.png',
          createdAt: '2019-07-30T16:24:54.983Z',
          updatedAt: '2019-08-07T04:09:56.622Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 27,
            createdAt: '2019-08-05T08:56:23.524Z',
            updatedAt: '2019-08-05T08:56:23.524Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 32,
      name: 'Eriberto Zboncak V',
      tel: '(626) 794-3858 x2457',
      address: '372 Reinger Shores',
      opening_hours: '08:00',
      description: 'Veritatis non ratione temporibus impedit et id ess',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=48.817524543311094',
      viewCounts: 3,
      createdAt: '2019-07-30T16:24:55.440Z',
      updatedAt: '2019-08-07T04:42:26.545Z',
      CategoryId: 3,
      FavoritedUsers: [
        {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password: '$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y',
          isAdmin: false,
          image: 'https://i.imgur.com/Q14p2le.jpg',
          createdAt: '2019-07-30T16:24:55.204Z',
          updatedAt: '2019-08-07T06:16:00.171Z',
          Favorite: {
            UserId: 2,
            RestaurantId: 32,
            createdAt: '2019-08-05T09:07:29.998Z',
            updatedAt: '2019-08-05T09:07:29.998Z'
          }
        }
      ],
      isFavorited: false,
      FavoriteCount: 1
    },
    {
      id: 17,
      name: 'Alexandro Bahringer',
      tel: '293-115-4784',
      address: '75754 Ashlynn Field',
      opening_hours: '08:00',
      description: 'Et dolores non harum. Non autem dolorem deserunt. ',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=46.018008252855424',
      viewCounts: null,
      createdAt: '2019-07-30T16:24:55.436Z',
      updatedAt: '2019-07-30T16:24:55.436Z',
      CategoryId: 1,
      FavoritedUsers: [
        {
          id: 1,
          name: 'root test',
          email: 'root@example.com',
          password: '$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe',
          isAdmin: true,
          image: 'https://i.imgur.com/58ImzMM.png',
          createdAt: '2019-07-30T16:24:54.983Z',
          updatedAt: '2019-08-07T04:09:56.622Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 17,
            createdAt: '2019-08-05T12:58:09.169Z',
            updatedAt: '2019-08-05T12:58:09.169Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 26,
      name: 'Zoe Connelly',
      tel: '724-565-0111',
      address: '8718 Nolan Roads',
      opening_hours: '08:00',
      description: 'Ipsum aspernatur quis est voluptates maiores quam ',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=51.62937107379864',
      viewCounts: 17,
      createdAt: '2019-07-30T16:24:55.438Z',
      updatedAt: '2019-08-06T23:46:46.297Z',
      CategoryId: 1,
      FavoritedUsers: [
        {
          id: 1,
          name: 'root test',
          email: 'root@example.com',
          password: '$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe',
          isAdmin: true,
          image: 'https://i.imgur.com/58ImzMM.png',
          createdAt: '2019-07-30T16:24:54.983Z',
          updatedAt: '2019-08-07T04:09:56.622Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 26,
            createdAt: '2019-08-05T12:58:14.489Z',
            updatedAt: '2019-08-05T12:58:14.489Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 31,
      name: 'Shaun Pfeffer',
      tel: '1-497-798-0349',
      address: '2593 Brenna Ways',
      opening_hours: '08:00',
      description: 'sapiente et et',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=72.44505750884267',
      viewCounts: null,
      createdAt: '2019-07-30T16:24:55.440Z',
      updatedAt: '2019-07-30T16:24:55.440Z',
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    }
  ]
}

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
    fetchRestaurantTops() {
      this.restaurants = dummyData.restaurants
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
