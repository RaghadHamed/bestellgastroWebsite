<template>
  <section class="section--hero">
    <client-only>
      <div class="first-section">
        <div class="slide-wrapper">
          <div class="slide-text">
            <h1 class="hero--title">{{text}}</h1>
            <div class="button--wrapper">
              <UIBaseButton  @click.native="toggleModal">
                <span>{{btn }}</span>
                <svg class="icon icon-white">
                  <use
                    xlink:href="~/static/sprite.svg#icon-chevron-right"
                  ></use>
                </svg>
              </UIBaseButton>
            </div>
          </div>
          <div class="slide-image tada">
            <img :src="require(`~/static/images/new/${image}`)" />
          </div>
          <!--<p class="hero--paragraph">
              {{ item.description }}
            </p>-->
        </div>
      </div>
      <img
        class="image"
        src="~/static/images/new/264-2642992_sky-with-clouds-clipart21.png"
        alt=""
      />
    </client-only>
    <UIModal :modal-active="modalActive" @closeModal="closeModal()">
      <UIHeroModal
        modal-class="modal--get--in-touch--popup"
        :modal-active="modalActive"
      />
    </UIModal>
  </section>
</template>

<script>

export default {
  props:{
    text:String,
    btn:String,
    image:String
  },
  data() {
    return {
      dir: this.$i18n.locale === 'ar' ? 'rtl' : 'ltr',
      options: {
        loop: true,
        perPage: 1,
        autoplay: true,
        paginationEnabled: true,
        paginationColor: '#21b8e62f',
        paginationActiveColor: '#21b7e6',
        easing: 'ease-out',
        Number: 12,
        centerMode: true,
        autoplayTimeout: 6000,
        speed: 2200,
        spacePadding: -10,
      },

      modalActive: false,
    }
  },

  computed: {
    

    isRtl() {
      return this.dir === 'rtl'
    },

    direction() {
      return this.isRtl ? 'backward' : 'forward'
    },

    slides() {
      return this.isRtl ? this.reversedCarouselSlides : this.heroData
    },

    reversedCarouselSlides() {
      return this.heroData.slice(0).reverse()
    },
  },

  methods: {
    scrollTo(url) {
      if (url) this.$scrollTo(url)
    },

   
    toggleModal() {
      this.modalActive = !this.modalActive
    },
    closeModal() {
      this.modalActive = false
    },
  
  },
}
</script>

<style lang="scss">
@import './section-hero-style.scss';
@import './section-hero-query.scss';
</style>
