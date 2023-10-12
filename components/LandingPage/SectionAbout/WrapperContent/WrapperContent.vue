<template>
  <div class="about--wrapper--content">
    <h2 class="about--small--title">{{ content.subTitle }}</h2>
    <h3 class="about--main--title">{{ content.title }}</h3>
    <ul class="about--list">
      <li
        v-for="(aboutParagraph, index) in content.AboutbestellgastroDescriptions"
        :key="aboutParagraph.id"
        class="about--list--item"
        data-aos-easing="ease-in"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-anchor-placement="top-bottom"
        :data-aos-delay="index * 200"
      >
        <svg class="icon">
          <use xlink:href="~/static/sprite.svg#icon-checkmark"></use>
        </svg>
        <p class="about--paragraph">
          {{ aboutParagraph.description }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './wrapper-content-style.scss';
@import './wrapper-content-query.scss';
</style>
