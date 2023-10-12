<template>
  <div v-if="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    smallTitle: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    paragraph: {
      type: String,
      required: true,
    },

    isSelected: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isActive: true,
    }
  },

  mounted() {
    this.isActive = this.isSelected
  },
}
</script>
