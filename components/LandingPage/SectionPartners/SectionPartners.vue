<template>
  <section class="section--partners">
    <h2 class="partners--main--title"  
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-anchor-placement="center-bottom">Hast Du Fragen?</h2>
    <h3 class="partners--small--title"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-delay="600">
      Gerne beantworten wir Dir deine Fragen rund um unsere
      BestellGastro-Plattform. Kontaktiere uns hierfür einfach über unsere
      Kontaktformular oder per E-Mail
    </h3>
    <div class="button--wrapper"  data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-delay="1200"
        data-aos-anchor-placement="center-bottom">
      <UIBaseButton @click.native="toggleModal">
        <span>{{ $t(' KONTAKTIERE UNS JETZT ') }}</span>
        <img src="~/static/images/new/6.png" alt="" />
      </UIBaseButton>
    </div>
    <UIModal :modal-active="modalActive" @closeModal="closeModal()">
      <UIKONTAKTIERE
        modal-class="modal--get--in-touch--popup"
        :modal-active="modalActive"
      />
    </UIModal>
  </section>
</template>

<script>
export default {
  data() {
    return {
      modalActive: false,
    }
  },
  methods:{
    toggleModal() {
      this.modalActive = !this.modalActive
      console.log("hiiiii")
    },
    closeModal() {
      this.modalActive = false
    },
  }
}
</script>

<style lang="scss">
@import './section-partners-style.scss';
@import './section-partners-query.scss';
</style>
