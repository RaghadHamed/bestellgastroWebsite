<template>
  <div class="Umwelt">
    <LandingPageSectionHero
      text="Die Umwelt liegt in unserer Verantwortung"
      btn=" Sei ein Teil davon "
      image="pngwing.com7.png"
    />
    <LandingPageSectionCallToActionUmwelt />
    <LandingPageSectionGrayCards
      title="Warum ist BestellGastro für die Umwelt wichtig?"
      :items="items"
    />
    <LandingPageSectionAboutUmwelt />
    <LandingPageSectionPartners />
    <section class="gradinate"></section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Lebensmittelverschwendung',
          svg:'foodwaste.svg',
          description: `
          In Deutschland wurden im Jahr 2020 Lebensmittelabfälle in Höhe von 10,9 Mio.
           Tonnen produziert.
            Davon entstanden 7% im Handel und 17% in der Gastronomie.
<br />
<br />
Das bedeutet, dass fast 1/4 (24%) der Lebensmittelabfälle in der Gastronomie und Großhandelbranche anfallen, welche drastisch reduziert werden müssen.`,
        },
        {
          id: 2,
          title: 'CO2 Emissionen verringern',
          svg:'co2.svg',
          description: `
          Pro Jahr werden 35 Millionen Tonnen CO2 Emissionen in der Gastrobranche erzeugt.
<br /><br />
Durch falsche Warenlieferungen müssen zusätzliche Touren gefahren werden. Diese falschen Lieferungen können von Restaurant nicht verarbeitet werden und landen im Müll.
<br /><br />
Die Plattform bietet den Großhändler die Möglichkeit Produkte mit kurzem Mindesthaltbarkeitsdatum (MHD) als Angebote rechtzeitig zu verkaufen, bevor sie weggeschmissen werden müssen.`,
        },
        {
          id: 3,
          title: 'Nachhaltig',
          svg:'enviromentcare.svg',
          description: `Wir wünschen uns, dass sich Gastronomiebetreiber und Großhändler aktiv an der Reduzierung von Abfällen und CO2 beteiligen. Es liegt in unserer Verantwortung die Umwelt zu schützen und achtsamer mit Lebensmittel umzugehen.`
 },
      ],
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
