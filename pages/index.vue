<template>
  <div class="app">
    <LandingPageSectionHero text="Die richtige Ware zur richtigen Zeit"
    btn="Partner werden"
    image="iPhoneMockupFrontView2.png"/>
    <LandingPageSectionCallToAction />
    <LandingPageSectionAbout />
    <LandingPageSectionServices />
    <LandingPageSectionBenefits />
    <LandingPageSectionHowItWorks />
    <LandingPageSectionProductsFeature />
    <LandingPageSectionPartners />
    <LandingPageSectionGetInTouch />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      enSeo: {
        title: 'bestellgastroWebsite: Innovative Online Payment Gateway. e-Pay your way',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              'bestellgastro| we make it easy for everyone to make secure online payments. Experience the latest payment solutions. shop and pay',
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content:
              'mobile payment gateway, mobile payment gateway integration, mobile payment gateways, mobile payment services, money gateway, money transfer payment gateway, my bestellgastro android app, my bestellgastro android application, my bestellgastro app, my bestellgastro ios app, my bestellgastro ios application, need payment gateway, network online payment gateway, network payment gateway, new payment gateway, online business payments, online direct payment, online gateway payment services, online gateway providers, online merchant gateway, online merchant payment gateway, online pay services, online payment, online payment accounts, online payment api, online payment app, online payment checkout, online payment ecommerce, online payment gateway, online payment gateway api, online payment gateway integration, online payment gateway providers, online payment gateway service providers, online payment integration, online payment interface, online payment merchant, online payment merchant account, online payment merchant services, online payment platforms, online payment provider, online payment solutions, online payment vendors, online payments companies, online platform payment, online store payment gateway, our products, pay by bank account information, pay by bank card, pay by link ,pay by QR code, pay by social media link, pay checkout, pay gateway, pay now payment gateway, pay payment gateway, Pay the bestellgastro way, payment apps for small businesses, payment by mobile phone, payment ecommerce, payment gateway, payment gateway account, payment gateway acquirer, payment gateway app, payment gateway application, payment gateway authentication, payment gateway b2b, payment gateway bank transfer, payment gateway business, payment gateway business model, payment gateway business plan, payment gateway checkout, payment gateway company, payment gateway design, payment gateway documentation, payment gateway ecommerce, payment gateway fintech, payment gateway in app, payment gateway in e commerce, payment gateway in middle east, payment gateway industry, payment gateway information, payment gateway integration, payment gateway integration in android, payment gateway integration in ecommerce, payment gateway integration in mobile application, payment gateway interface, payment gateway is, payment gateway link, payment gateway market, payment gateway merchant account, payment gateway middle east, payment gateway mobile app, payment gateway model, payment gateway name',
          },
        ],
      },

      arSeo: {
        title: 'إي-كاش| أسرع و أأمن بوابة دفع الكتروني. ادفع عَ طريقتك',

        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              'إي-كاش| أسهل، أأمن، و أسرع طريقة للدفع الالكتروني. جرب أحدث حلول الدفع. تسوق عَ راحتك و ادفع عَ طريقتك',
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content:
              'بوابة الدفع الالكتروني, دفع, الدفع الالكتروني, موبايلك بكفي, التكنولوجيا المالية, ادفع ع طريقتك, ادفع على طريقتك, مكن اعمالك, ادفع عن طريق بطاقة البنك اوحساب البنك, تطبيق إي-كاش اعمال, إي-كاش باي, تطبيق إي-كاش, إي-كاش باي بوابة الدفع الالكتروني, مشاركة رابط الدفع, رمز QR, بوابة الدفع الالكتروني, وكلاء إي كاش, انضم الى إي-كاش, عملاء إي-كاش',
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

<style></style>
