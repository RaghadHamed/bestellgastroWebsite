<template>
  <section class="section--call--to--action">
    <div class="section--call--to--action--wrapper2">
      <div class="sectionImage" data-aos="fade" data-aos-duration="1200">
        <h4 class="call--to--action-title">
          {{ title }}
        </h4>
      </div>
      <div class="list">
        <div class="item" data-aos="fade" v-for="(item,index) in items" :key="index">
          <img  :src="require(`~/static/images/new/${item.svg}`)" alt="" >
          <h4>{{ item.title }}</h4>
          <p v-html="item.description"></p>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    items: Array,
  },
}
</script>

<style lang="scss" scoped>
@import './section-call-to-action-style.scss';
</style>
