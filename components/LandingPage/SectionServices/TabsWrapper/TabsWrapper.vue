<template>
  <article
    class="section--services--content--wrapper"
    data-aos-easing="ease-out-quart"
    data-aos="zoom-in"
    data-aos-duration="1000"
    data-aos-anchor-placement="top-center"
  >
    <header class="services--tabs--header">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{
          'services--tab--header--disable': !tab.isActive,
          'services--tab--header--content--2': index === 1,
        }"
        class="services--tab--header--content services--tab--header--content--1"
        @click="selectTab(tab)"
      >
        <h4 class="services--tab--small--title">{{ tab.smallTitle }}</h4>
        <h3 class="services--tab--main--title">{{ tab.title }}</h3>
        <p class="services--tab--paragraph">
          {{ tab.paragraph }}
        </p>
      </div>

      <div
        v-for="(item, index) in getServices"
        :key="index + 5"
        class="hidden--container"
      >
        <h4 class="services--tab--small--title">{{ item.subTitle }}</h4>
        <h3 class="services--tab--main--title">{{ item.title }}</h3>
        <p class="services--tab--paragraph">
          {{ item.description }}
        </p>
      </div>
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
html:lang(ar) * {
  grid-auto-flow: dense;
  direction: rtl;
}

.tabanim-enter-active,
.tabanim-leave-active {
  transition: all 4s ease;
}

.tabanim-enter-from,
.tabanim-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
