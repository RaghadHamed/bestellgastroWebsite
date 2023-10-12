<template>
  <section class="section--about">
    <img class="sectionImage" src="~/static/images/new/down.png" alt="" />
    <div id="about" class="about--wrapper">
      <h3 class="section--about--main--title">
        Die ersten Schritte sind schon getan. Unterstütze uns jetzt dabei größer
        zu werden.
      </h3>
      <p>
        Falls wir dein Interesse geweckt haben und du ein Teil dieser
        Entwicklung sein möchtest, freuen wir uns über eine Nachricht von dir.
        Mehr Informationen Rund um das Unternehmen und wie du uns unterstützen
        kannst, senden wir dir gerne zu.
      </p>
      <br />
      <br />
      <p>
        Unser BestellGastro Geschäftskund*innen-Team freut sich mit dir Kontakt
        aufzunehmen.
      </p>
      <br />
      <div
        class="button--wrapper"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-delay="1200"
        data-aos-anchor-placement="center-bottom"
      >
        <UIBaseButton v-scroll-to="'#ourproducts'" :anchor="true">
			<img src="~/static/images/new/6.png" alt="" />
          <span> Lass uns zusammenarbeiten!</span>
         
        </UIBaseButton>
      </div>
    </div>
  </section>
</template>



<style lang="scss" scoped>
@import './section-about-style.scss';
@import './section-about-query.scss';
html:lang(ar) .section--about {
  direction: rtl;
}
</style>
