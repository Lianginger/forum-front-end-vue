<template>
  <div class="col-3">
    <a href="#">
      <img :src="user.image" :alt="user.name" width="140px" height="140px" />
    </a>
    <h2>{{user.name}}</h2>
    <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
    <p class="mt-3">
      <button v-if="user.isFollowed" type="button" class="btn btn-danger">取消追蹤</button>
      <button v-else type="button" class="btn btn-primary">追蹤</button>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

