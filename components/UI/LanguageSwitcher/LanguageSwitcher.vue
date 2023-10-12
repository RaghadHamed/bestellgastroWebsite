<template>
  <div class="language--switcher">
    <button
      href="#"
      class="language--switcher--button"
      @click="toggleVisibility"
      @keydown.space.exact.prevent="toggleVisibility"
      @keydown.esc.exact="hideDropdown"
      @keydown.shift.tab="hideDropdown"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
      <span>{{ $i18n.locale.toUpperCase() }}</span>
    </button>
    <transition name="dropdown-fade">
      <ul v-if="isVisible" ref="dropdown" class="language--switcher--dropdown">
        <li
          v-for="locale in availableLocales"
          :key="locale.code"
          class="item--list"
        >
          <a
            href="#"
            class="item--link"
            @click.prevent.stop="setLocale(locale)"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent=""
            @keydown.tab.exact="hideDropdown"
            @keydown.esc.exact="hideDropdown"
          >
            <span class="ml-2">{{ locale.name }}</span>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      focusedIndex: 0,
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
    hideDropdown() {
      this.isVisible = false
      this.focusedIndex = 0
    },
    startArrowKeys() {
      if (this.isVisible) {
        this.$refs.dropdown.children[0].children[0].focus()
      }
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus()
    },
    setLocale(locale) {
      this.$i18n.setLocale(locale.code)
      setTimeout(() => window.location.reload(), 0)

      this.hideDropdown()
    },
  },
}
</script>

<style lang="scss" scoped>
@import './language-switcher-style.scss';
</style>
