<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="text">留下評論：</label>
      <textarea v-model="text" name="text" id="text" rows="3" class="form-control"></textarea>
    </div>
    <div class="text-right">
      <button type="submit" class="btn btn-primary mr-0">Submit</button>
    </div>
  </form>
</template>

<script>
import uuid from 'uuid/v4'

export default {
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      text: ''
    }
  },
  methods: {
    handleSubmit() {
      // 向 API 發送 POST 請求，伺服器新增 Comment 成功後...
      this.$emit('after-create-comment', {
        commentId: uuid(),
        restaurantId: this.restaurantId,
        text: this.text
      })
      this.text = ''
    }
  }
}
</script>
