<template>
  <article class="section--products--content--wrapper">
    <header class="products--tabs--header">
      <h3
        v-for="(tab, index) in tabs"
        :key="index + 6"
        :class="{
          'products--tab--header--active': tab.isActive,
        }"
        class="products--tab--main--title"
        @click="selectTab(tab)"
      >
        {{ tab.title }}
      </h3>

      <h3 v-for="product in products" :key="product.id" class="hidden--header">
        {{ product.name }}
      </h3>
    </header>

    <slot></slot>
  </article>
</template>

<script>

export default {
  data() {
    return {
      tabs: [],
    }
  },


  created() {
    this.tabs = this.$children
  },

  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.title === selectedTab.title
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import './tabs-wrapper-style.scss';
@import './tabs-wrapper-query.scss';
</style>
