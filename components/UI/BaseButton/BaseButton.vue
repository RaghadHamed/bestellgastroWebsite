<template>
  <component :is="type" class="btn" :class="btnClass">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    anchor: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: null,
    },
    btnClass: {
      type: String,
      default: 'btn--primary',
    },
  },

  computed: {
    type() {
      if (this.anchor) {
        return 'a'
      } else {
        return 'button'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import './base-button.scss';
</style>
