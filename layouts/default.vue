<template>
  <div v-show="isLoaded">
    <LandingPageHeader />
    <main>
      <Nuxt />
    </main>
    <LandingPageFooter />
    <div v-scroll-to="'.header'" class="scroll--to--top">
      <img class="icon" src="~/static/images/new/2b238a7a.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
    this.isLoaded = true
  },
}
</script>

<style lang="scss" scoped>
.scroll--to--top {
  height: 38px;
  width: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  right: 4%;
  bottom: 25px;
  background-color: $color-primary;
  border-radius: 50%;
  box-shadow: rgb(128, 128, 128) 2px 2px 8px 0px;
  cursor: pointer;

  .icon {
    width: 2rem;
    height: 2rem;
  }
}
</style>
