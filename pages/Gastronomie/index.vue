<template>
  <div class="Gastronomie">
    <LandingPageSectionHero
      text="Bestell jetzt deine Ware einfach Online!"
      btn="Partner werden"
      image="iPhoneMockupFrontView2.png"
    />
    <LandingPageSectionCallToActionGastronomie />
    <LandingPageSectionGrayCards
      title="Darum solltest mit BestellGastro arbeiten!"
      :items="items"
    />
    <LandingPageSectionAboutGastronomie />
    <LandingPageSectionCallToAction2Gastronomie />
    <LandingPageSectionGrayCards2 title="Deine Vorteile" :items="items2" />
    <LandingPageSectionPartners />
    <LandingPageSectionGetInTouch />
  </div>
</template>

<script>

export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Jederzeit & von überall stressfrei bestellen',
          svg: 'moneytime.svg',
          description: `Bestellungen müssen nicht mehr kompliziert per Telefon aufgegeben werden. Mit nur wenigen Klicks kannst du deine Ware ohne Kommunikations und Sprachprobleme stressfrei online bestellen.`,
        },
        {
          id: 2,
          title: 'Digital & bei allen Großhändlern bestellen',
          svg: 'digitalonline.svg',
          description: `In der BestellGastro-App hast du einen Überblick über alle Großhändler in deiner Nähe. Außerdem bietet dir die App zusätzliche Funktionen, die deinen Gastronomiealltag erleichtern.`,
        },
        {
          id: 3,
          title: 'Kein Risiko',
          svg: 'moneyrise.svg',
          description: `Alle Rechnungen und Lieferscheine sind online gesichert. Das bedeutet, kein Chaos und keine Zettelwirtschaft mehr nötig. Keine Abo und keine versteckten Kosten. Bestelle nur dann, wenn und was du möchtest.`,
        },
      ],
      items2: [
        {
          id: 1,
          items: [
            {
              id: 1,
              title: 'Alle Großhändler in deiner Nähe finden',
            },
            {
              title: 'Beste Produkte & Angebote entdecken',
            },
            {
              id: 3,
              title: 'Stressfreie Bestellungen jederzeit und überall',
            },
            {
              id: 4,
              title: 'Rechnungen im Voraus einsehen & online bezahlen',
            },
            {
              id: 5,
              title: 'Keine falsche Warenlieferungen UND DAS GANZE KOSTENLOS!',
            },
          ],
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
