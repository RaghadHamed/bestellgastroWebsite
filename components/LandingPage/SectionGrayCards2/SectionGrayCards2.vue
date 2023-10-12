<template>
  <section class="section--call--to--action">
    <div :class="style2?' section--call--to--action--wrapper2' :'section--call--to--action--wrapper2 style1'">
      <span class="icon-star"
        ><img src="~/static/images/new/5551834-30ab25f1.png" alt=""
      /></span>
      <div class="sectionImage" data-aos="fade" data-aos-duration="1200">
        <h4 class="call--to--action-title">
          {{ title }}
        </h4>
      </div>
      <div class="list">
        <div
          class="item"
          data-aos="fade"
          v-for="(item, index) in items"
          :key="index"
        >
          <div
            class="itemTitle"
            v-for="(itemTitle, index2) in item.items"
            :key="index2"
          >
            <img src="~/static/images/new/1828739-a5606fd9.png" alt="" />
            <h4>{{ itemTitle.title }}</h4>
          </div>
        </div>
      </div>

      <h4 v-if="description!=null" class="description">{{ description }}</h4>
      <div v-if="style2==true" class="button--wrapper">
              <UIBaseButton v-scroll-to="'#ourproducts'" :anchor="true">
                <span>{{ $t(' Werde jetzt Partner ') }}</span>
                <svg class="icon icon-white">
                  <use
                    xlink:href="~/static/sprite.svg#icon-chevron-right"
                  ></use>
                </svg>
              </UIBaseButton>
            </div>
    </div> 
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    description:String,
    items: Array,
    style2:Boolean
  },
}
</script>

<style lang="scss" scoped>
@import './section-call-to-action-style.scss';
</style>
