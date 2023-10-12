<template>
  <section class="section--about">
    <img class="sectionImage" src="~/static/images/new/down.png" alt="" />
    <div id="about" class="about--wrapper">
      <p>
        Dank der kostenlosen BestellGastro-App kannst du den gesamten
        Bestellvorgang in wenigen Minuten durchführen. Somit sparst du Stress,
        Geld und Zeit. Außerdem vermeidest du falsche Warenlieferungen und
        bekommst nur das, was du wirklich brauchst. Präzise Bestellungen
        bedeuten weniger Lebensmittel für die Tonne gut für die Umwelt.
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
          <span>Werde jetzt Partner</span>
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
