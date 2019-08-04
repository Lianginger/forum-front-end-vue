<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <div class="row">
      <UserCard v-for="user in 3" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs'
import UserCard from '../components/UserCard'

export default {
  components: {
    NavTabs,
    UserCard
  }
}
</script>
