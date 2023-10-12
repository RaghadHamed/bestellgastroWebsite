<template>
  <div class="GroBhandler">
    <LandingPageSectionHero
      text="Digitalisierung ist Zukunft für dein Unternehmen"
      btn=" Werde jetzt Partner "
      image="ipadbestell.png"
    />
    <LandingPageSectionSecondGroBhandler />
    <LandingPageSectionGrayCards
      title="Warum ist BestellGastro wichtig für dein Geschäft?"
      :items="items"
    />
    <LandingPageSectionAboutGroBhandler />
    <LandingPageSectionGrayCards2
      title="Deine Vorteile"
      :items="items2"
      description="Bei der Umstellung von manuellen Systemen auf den digitalen Vertriebsprozess werden wir dich in jedem Punkt unterstützen."
      :style2= true
    />
    
    <LandingPageSectionCallToActionGroBhandler />
    <LandingPageSectionProductsFeatureGroBhandler />
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
          title: 'Keine Bestellaufnahme mehr per Telefon nötig',
          svg: 'Nocall.svg',
          description: `Ab jetzt Bestellen deine Kunden online! Dank BestellGastro führen Online-Bestellungen, im Vergleich zur manuellen Verarbeitung, zu einer geringen Fehlerquote. Dies spart viel Zeit und Stress.`,
        },
        {
          id: 2,
          title:
            'Alle Angebote online bewerben für ein genaues & hohes Bestellvolumen',
          svg: 'riseonline.svg',
          description: `Auf der BestellGastro-Plattform kannst du deinen gesamten Warenkatalog präsentieren, neue Produkte einfach hinzufügen und sofort bewerben. Durch die Online-Auflistung aller deiner Produkte bekommen deine Kunden einen besseren Überblick und keine notwendigen Produkte übersehen.`,
        },
        {
          id: 3,
          title: 'Mehr Umsatz & stressfreie Kundenbeziehungen',
          svg: 'handshake.svg',
          description: `Wir vereinfachen die Bestellprozesse, damit du eine stressfreie Kommunikation mit deinen Kunden hast. Das heißt, dass du mehr Kunden gewinnst, deine Bestellprozesse schneller und effektiver werden und dein Umsatz steigt.`,
        },
      ],
      items2: [
        {
          id: 1,
          items: [
            {
              id: 1,
              title: 'Bestellvolumen erhöhen',
            },
            {
              id: 2,
              title: 'Neukundengewinnung',
            },
            {
              id: 3,
              title: 'Bessere Sichtbarkeit',
            },
            {
              id: 4,
              title: 'Fehler beim Bestellprozess minimieren',
            },
            {
              id: 5,
              title: 'Werbung schalten & Angebote bewerben',
            },
          ],
        },
        {
          id: 2,
          items: [
            {
              id: 1,
              title: 'Umsatz erhöhen',
            },
            {
              id: 2,
              title: 'Mehr Sic​herheit ',
            },
            {
              id: 3,
              title: 'Mobile-app',
            },
            {
              id: 4,
              title: 'Optimiert für Desktop,  Tablet und Handys',
            },
            {
              id: 5,
              title: 'IT-Support 24h',
            },
            {
              id: 6,
              title: 'Kein Risiko',
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
@import './GroBhandler-style.scss';
@import './GroBhandler-query.scss';
html:lang(ar) .careers {
  direction: rtl;
}
</style>
