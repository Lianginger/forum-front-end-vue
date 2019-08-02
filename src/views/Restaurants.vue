<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import RestaurantCard from '../components/RestaurantCard'
import RestaurantsNavPills from '../components/RestaurantsNavPills'
import { duration } from 'moment'

const dummyData = {
  restaurants: [
    {
      id: 30,
      name: 'Lyda Bruen',
      tel: '1-295-307-9128 x25682',
      address: '79554 Kassulke Radial',
      opening_hours: '08:00',
      description: 'Et quam iste nulla ut et distinctio sunt omnis rec',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=25.932072460400413',
      viewCounts: 1,
      createdAt: '2019-07-30T16:24:55.440Z',
      updatedAt: '2019-07-31T04:26:33.945Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2019-07-30T16:24:55.429Z',
        updatedAt: '2019-07-30T16:24:55.429Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 27,
      name: 'Penelope Mayert DDS',
      tel: '1-775-369-6229',
      address: '52148 Susan Pike',
      opening_hours: '08:00',
      description: 'non nobis quo',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=77.93437663958767',
      viewCounts: null,
      createdAt: '2019-07-30T16:24:55.439Z',
      updatedAt: '2019-07-30T16:24:55.439Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2019-07-30T16:24:55.429Z',
        updatedAt: '2019-07-30T16:24:55.429Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 26,
      name: 'Zoe Connelly',
      tel: '724-565-0111',
      address: '8718 Nolan Roads',
      opening_hours: '08:00',
      description: 'Ipsum aspernatur quis est voluptates maiores quam ',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=51.62937107379864',
      viewCounts: null,
      createdAt: '2019-07-30T16:24:55.438Z',
      updatedAt: '2019-07-30T16:24:55.438Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2019-07-30T16:24:55.429Z',
        updatedAt: '2019-07-30T16:24:55.429Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 24,
      name: 'Al Von',
      tel: '038-326-5052',
      address: '5559 VonRueden Courts',
      opening_hours: '08:00',
      description: 'Aliquid numquam hic. Minima perferendis quia cum t',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=37.9512586281334',
      viewCounts: null,
      createdAt: '2019-07-30T16:24:55.438Z',
      updatedAt: '2019-07-30T16:24:55.438Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2019-07-30T16:24:55.429Z',
        updatedAt: '2019-07-30T16:24:55.429Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 23,
      name: 'Obie Veum',
      tel: '852.152.3521 x47973',
      address: '543 Waters Bypass',
      opening_hours: '08:00',
      description: 'Ea voluptate fugiat id est voluptatem sit. Aut deb',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=47.513014434319146',
      viewCounts: null,
      createdAt: '2019-07-30T16:24:55.437Z',
      updatedAt: '2019-07-30T16:24:55.437Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2019-07-30T16:24:55.429Z',
        updatedAt: '2019-07-30T16:24:55.429Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 17,
      name: 'Alexandro Bahringer',
      tel: '293-115-4784',
      address: '75754 Ashlynn Field',
      opening_hours: '08:00',
      description: 'Et dolores non harum. Non autem dolorem deserunt. ',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=46.018008252855424',
      viewCounts: null,
      createdAt: '2019-07-30T16:24:55.436Z',
      updatedAt: '2019-07-30T16:24:55.436Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2019-07-30T16:24:55.429Z',
        updatedAt: '2019-07-30T16:24:55.429Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 7,
      name: 'Melvin Flatley Sr.',
      tel: '1-255-894-3279 x2314',
      address: '138 Quinn Street',
      opening_hours: '08:00',
      description: 'quos dolore tenetur',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=43.25768589113377',
      viewCounts: null,
      createdAt: '2019-07-30T16:24:55.434Z',
      updatedAt: '2019-07-30T16:24:55.434Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2019-07-30T16:24:55.429Z',
        updatedAt: '2019-07-30T16:24:55.429Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 46,
      name: 'Jasper Mueller',
      tel: '254-159-2190',
      address: '44890 Dominique Wall',
      opening_hours: '08:00',
      description: 'dolorem ratione et',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=67.08831513935154',
      viewCounts: null,
      createdAt: '2019-07-30T16:24:55.443Z',
      updatedAt: '2019-07-30T16:24:55.443Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2019-07-30T16:24:55.429Z',
        updatedAt: '2019-07-30T16:24:55.429Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 42,
      name: 'Melody Koepp',
      tel: '(774) 342-2533',
      address: '3318 Feeney Hollow',
      opening_hours: '08:00',
      description: 'beatae iste alias',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=71.34426799459621',
      viewCounts: null,
      createdAt: '2019-07-30T16:24:55.442Z',
      updatedAt: '2019-07-30T16:24:55.442Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2019-07-30T16:24:55.429Z',
        updatedAt: '2019-07-30T16:24:55.429Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 40,
      name: 'Robyn Schroeder',
      tel: '406.132.4400',
      address: '647 Yundt Mountains',
      opening_hours: '08:00',
      description: 'Incidunt rerum perspiciatis ut iste ipsum labore.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=15.902129223636363',
      viewCounts: null,
      createdAt: '2019-07-30T16:24:55.441Z',
      updatedAt: '2019-07-30T16:24:55.441Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2019-07-30T16:24:55.429Z',
        updatedAt: '2019-07-30T16:24:55.429Z'
      },
      isFavorited: false,
      isLiked: false
    }
  ],
  categories: [
    {
      id: 1,
      name: '中式料理',
      createdAt: '2019-07-30T16:24:55.429Z',
      updatedAt: '2019-07-30T16:24:55.429Z'
    },
    {
      id: 2,
      name: '日本料理',
      createdAt: '2019-07-30T16:24:55.429Z',
      updatedAt: '2019-07-30T16:24:55.429Z'
    },
    {
      id: 3,
      name: '義大利料理',
      createdAt: '2019-07-30T16:24:55.429Z',
      updatedAt: '2019-07-30T16:24:55.429Z'
    },
    {
      id: 4,
      name: '墨西哥料理',
      createdAt: '2019-07-30T16:24:55.429Z',
      updatedAt: '2019-07-30T16:24:55.429Z'
    },
    {
      id: 5,
      name: '素食料理',
      createdAt: '2019-07-30T16:24:55.429Z',
      updatedAt: '2019-07-30T16:24:55.429Z'
    },
    {
      id: 6,
      name: '美式料理',
      createdAt: '2019-07-30T16:24:55.429Z',
      updatedAt: '2019-07-30T16:24:55.429Z'
    },
    {
      id: 7,
      name: '複合式料理',
      createdAt: '2019-07-30T16:24:55.429Z',
      updatedAt: '2019-07-30T16:24:55.429Z'
    }
  ],
  categoryId: '',
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2
}

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills
  },
  data() {
    return {
      categories: [],
      categoryId: -1,
      currentPage: 1,
      restaurants: [],
      totalPage: -1
    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants() {
      this.categories = dummyData.categories
      this.categoryId = dummyData.categoryId
      this.currentPage = dummyData.page
      this.restaurants = dummyData.restaurants
      this.totalPage = dummyData.totalPage.length
    }
  }
}
</script>
