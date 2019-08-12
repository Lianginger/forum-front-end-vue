<template>
  <form>
    <div class="form-group">
      <label for="name">Name</label>
      <input v-model="restaurant.name" id="name" type="text" class="form-control" name="name" placeholder="Enter name" required />
    </div>
    <div class="form-group">
      <label for="categoryId">Category</label>
      <select v-model="restaurant.categoryId" id="categoryId" type="text" class="form-control" name="categoryId" required>
        <option value selected disabled>--請選擇--</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input v-model="restaurant.tel" id="tel" type="text" class="form-control" name="tel" placeholder="Enter telephone number" />
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input v-model="restaurant.address" id="address" type="text" class="form-control" name="address" placeholder="Enter address" />
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input  v-model="restaurant.openingHours" id="opening-hours" type="time" class="form-control" name="opening_hours" />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea v-model="restaurant.description" id="description" class="form-control" rows="3" name="description" />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <input id="image" type="file" class="form-control-file" name="image" accept="image/*" />
    </div>

    <button type="summit" class="btn btn-primary">送出</button>
  </form>
</template>

<script>
const dummyData = {
  categories: [
    {
      id: 1,
      name: '中式料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    {
      id: 2,
      name: '日本料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    {
      id: 3,
      name: '義大利料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    {
      id: 4,
      name: '墨西哥料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    }
  ]
}

export default {
  data() {
    return {
      restaurant: {
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      },
      categories: []
    }
  },
  created() {
    this.fetchCategories()
  },
  methods: {
    fetchCategories() {
      this.categories = dummyData.categories
    }
  }
}
</script>