<template>
  <div v-if="loading" class="loading-page">
    <div class="box_section">
      <div class="image_box">
        <img src="~/static/images/new/bestellgastrologosticker.png" alt="Logo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),

  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import './loader-style.scss';
</style>
