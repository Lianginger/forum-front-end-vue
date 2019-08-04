<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <UserCard v-for="user in users" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs'
import UserCard from '../components/UserCard'

const dummyData = {
  users: [
    {
      id: 3,
      name: 'user2',
      email: 'user2@example.com',
      password: '$2a$10$tsvcnSFsJvdvs2NLm9rW.uYbah93Xl5cTYcQnSeK3sjEopj.NGzk2',
      isAdmin: false,
      image: 'https://i.imgur.com/OezkRwO.jpg',
      createdAt: '2019-07-30T16:24:55.422Z',
      updatedAt: '2019-08-01T10:34:36.023Z',
      Followers: [
        {
          id: 1,
          name: 'root',
          email: 'root@example.com',
          password:
            '$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe',
          isAdmin: true,
          image: 'https://i.imgur.com/58ImzMM.png',
          createdAt: '2019-07-30T16:24:54.983Z',
          updatedAt: '2019-08-01T10:33:51.095Z',
          Followship: {
            followerId: 1,
            followingId: 3,
            createdAt: '2019-08-01T10:26:55.618Z',
            updatedAt: '2019-08-01T10:26:55.618Z'
          }
        },
        {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password:
            '$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y',
          isAdmin: false,
          image: 'https://i.imgur.com/Q14p2le.jpg',
          createdAt: '2019-07-30T16:24:55.204Z',
          updatedAt: '2019-08-01T10:34:15.105Z',
          Followship: {
            followerId: 2,
            followingId: 3,
            createdAt: '2019-08-01T10:27:49.094Z',
            updatedAt: '2019-08-01T10:27:49.094Z'
          }
        }
      ],
      FollowerCount: 2,
      isFollowed: true
    },
    {
      id: 2,
      name: 'user1',
      email: 'user1@example.com',
      password: '$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y',
      isAdmin: false,
      image: 'https://i.imgur.com/Q14p2le.jpg',
      createdAt: '2019-07-30T16:24:55.204Z',
      updatedAt: '2019-08-01T10:34:15.105Z',
      Followers: [
        {
          id: 1,
          name: 'root',
          email: 'root@example.com',
          password:
            '$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe',
          isAdmin: true,
          image: 'https://i.imgur.com/58ImzMM.png',
          createdAt: '2019-07-30T16:24:54.983Z',
          updatedAt: '2019-08-01T10:33:51.095Z',
          Followship: {
            followerId: 1,
            followingId: 2,
            createdAt: '2019-08-01T10:26:54.947Z',
            updatedAt: '2019-08-01T10:26:54.947Z'
          }
        }
      ],
      FollowerCount: 1,
      isFollowed: true
    },
    {
      id: 1,
      name: 'root',
      email: 'root@example.com',
      password: '$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe',
      isAdmin: true,
      image: 'https://i.imgur.com/58ImzMM.png',
      createdAt: '2019-07-30T16:24:54.983Z',
      updatedAt: '2019-08-01T10:33:51.095Z',
      Followers: [
        {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password:
            '$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y',
          isAdmin: false,
          image: 'https://i.imgur.com/Q14p2le.jpg',
          createdAt: '2019-07-30T16:24:55.204Z',
          updatedAt: '2019-08-01T10:34:15.105Z',
          Followship: {
            followerId: 2,
            followingId: 1,
            createdAt: '2019-08-01T10:27:45.616Z',
            updatedAt: '2019-08-01T10:27:45.616Z'
          }
        }
      ],
      FollowerCount: 1,
      isFollowed: false
    }
  ]
}

export default {
  components: {
    NavTabs,
    UserCard
  },
  data() {
    return {
      users: []
    }
  },
  created() {
    this.fetchUser()
  },
  methods: {
    fetchUser() {
      this.users = dummyData.users
    }
  }
}
</script>
