<template>
  <transition name="modal-animation">
    <aside
      v-show="modalActive"
      :class="{ backdrop: wantBackdrop }"
      class="modal"
    >
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal--content--container">
          <svg v-if="closeNeeded" class="icon--close" @click="closeModal">
            <use xlink:href="~/static/sprite.svg#icon-close"></use>
          </svg>

          <slot></slot>
        </div>
      </transition>
    </aside>
  </transition>
</template>

<script>
export default {
  props: {
    modalActive: {
      type: Boolean,
      default: false,
    },

    wantBackdrop: {
      type: Boolean,
      default: false,
    },

    closeNeeded: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'modal-style.scss';
html:lang(ar) .modal {
  direction: rtl;
}
</style>
