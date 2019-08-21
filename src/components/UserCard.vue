<template>
  <div class="col-3">
    <a href="#">
      <img :src="user.image" :alt="user.name" width="140px" height="140px" />
    </a>
    <h2>{{user.name}}</h2>
    <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
    <p class="mt-3">
      <button @click.stop.prevent="deleteFollowing(user.id)" v-if="user.isFollowed" type="button" class="btn btn-danger">取消追蹤</button>
      <button @click.stop.prevent="addFollowing(user.id)" v-else type="button" class="btn btn-primary">追蹤</button>
    </p>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'

export default {
  props: {
    initialUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      user: this.initialUser
    }
  },
  methods: {
    async addFollowing(userId) {
      try {
        const { data, statusText } = await usersAPI.addFollowing(userId)
        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }
        this.user.isFollowed = true
        this.user.FollowerCount++
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法加入追蹤，請稍後再試'
        })
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data, statusText } = await usersAPI.deleteFollowing(userId)
        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }
        this.user.isFollowed = false
        this.user.FollowerCount--
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法取消追蹤，請稍後再試'
        })
      }
    }
  }
}
</script>

