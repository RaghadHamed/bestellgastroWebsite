<template>
  <div class="Investoren">
    <LandingPageSectionHero text="Nachhaltigkeit und Digitalisierung sind Zukunft"
    btn=" Du bist Investor*in? "
    image="body01.png"/>
    <LandingPageSectionCallToActionInvestoren/>
    <LandingPageSectionAboutInvestoren/>
    <section class="gradinate"></section>
  </div>
</template>

<script>

export default {
 

  data() {
    return {
      enSeo: {
        title:
          'Join bestellgastro team, to participate in building an advanced future',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              'bestellgastro | Career. We are creating a new opportunity for enthusiastic, passionate team. visit our career page and join our team',
          },
        ],
      },

      arSeo: {
        title: 'انضم الى عائلة إي-كاش',

        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              'إي-كاش | وظائف. نحن نصنع فرص عمل جديدة لفريق متميز و مبدع. قم بزيارة صفحة الوظاشف والانضمام إلى فريق إي-كاش',
          },
        ],
      },
    }
  },

  head() {
    const meta = this.$i18n.locale === 'en' ? this.enSeo : this.arSeo
    return {
      ...meta,
    }
  },

  
}
</script>

<style lang="scss" scoped>
@import './careers-style.scss';
@import './careers-query.scss';
html:lang(ar) .careers {
  direction: rtl;
}
</style>
