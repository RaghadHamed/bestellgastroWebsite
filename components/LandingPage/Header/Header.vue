<template>
  <header class="header">
    <nav class="header--left">
      <nuxt-link :to="localePath('/')" >
        <div class="main--logo--container">
          <img
            class="main--logo"
            src="~/static/images/new/bestellgastrologosticker.png"
            alt="bestellgastro Logo"
          />
        </div>
      </nuxt-link>
      
    </nav>
    <div class="header--right">
      <ul :class="{ 'nav--active': navigationActive }" class="list--wrapper">
        <li class="item--list">
          <nuxt-link
            :to="localePath('/')"
            class="item--link item--link--query"
            >{{ $t('Home') }}</nuxt-link
          >
        </li>
        <li class="item--list">
          <nuxt-link
            :to="localePath('Gastronomie')"
            class="item--link item--link--query"
            >{{ $t('Gastronomie') }}</nuxt-link
          >
        </li>
        <li class="item--list">
          <nuxt-link
            :to="localePath('GroBhandler')"
            class="item--link item--link--query"
            >{{ $t('Großhändler') }}</nuxt-link
          >
        </li>
        <li class="item--list">
          <nuxt-link
            :to="localePath('Umwelt')"
            class="item--link item--link--query"
            >{{ $t('Umwelt') }}</nuxt-link
          >
        </li>
        <li class="item--list">
          <nuxt-link
            :to="localePath('Investoren')"
            class="item--link item--link--query"
            >{{ $t('Investoren') }}</nuxt-link
          >
        </li>
      </ul>
      <UIMobileNavigation
        :active="navigationActive"
        @click.native="toggleMobileNavigation"
      />
    </div>
    
  </header>
</template>

<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

export default {
  name: 'TheHeader',
  data() {
    return {
      
      navigationActive: false,
    }
  },


  methods: {
    backHome(link) {
      this.$router.push(this.localeLocation({ name: 'index' }))
      setTimeout(
        () =>
          VueScrollTo.scrollTo(link, 2000, {
            easing: 'linear',
          }),
        1000
      )
    },
    toggleMobileNavigation() {
      this.navigationActive = !this.navigationActive
    },
    
  },
}
</script>

<style lang="scss" scoped>
@import './header-style.scss';
@import './header-media-query.scss';
html:lang(ar) {
  input[type='email'] {
    direction: ltr;
  }

  input[type='email']:-moz-placeholder {
    text-align: right;
  }

  input[type='email']:-ms-input-placeholder {
    text-align: right;
  }

  input[type='email']::-webkit-input-placeholder {
    text-align: right;
  }
}
</style>
