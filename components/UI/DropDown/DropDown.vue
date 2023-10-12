<template>
  <div class="input--wrapper">
    <label>{{ $t(`${label}`) }}</label>
    <div id="button" class="button" @click="$emit('showDropDownMenu')">
      <span id="select--label" ref="selectLabel">{{ item || items[0] }}</span>
      <svg class="icon">
        <use xlink:href="~/static/sprite.svg#icon-chevron-down-bold"></use>
      </svg>
    </div>
    <div :class="{ visible: isVisible }" class="dropdown">
      <div v-for="(singleItem, index) in items" :key="index">
        <label class="option--label" :for="singleItem">{{ singleItem }}</label>
        <input
          :id="singleItem"
          class="option"
          type="radio"
          name="position"
          :value="singleItem"
          @click="selectPosition($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: null,
    },

    item: {
      type: String,
      default: null,
    },

    label: {
      type: String,
      default: null,
    },

    isVisible: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {
    this.$emit('passItem', this.$refs.selectLabel.innerText)
  },

  methods: {
    selectPosition(e) {
      const labelElemnt = this.$el.querySelector(
        `label[for="${e.target.id}"]`
      ).innerText

      this.$refs.selectLabel.innerText = labelElemnt
      this.$emit('passItem', this.$refs.selectLabel.innerText)
      this.$emit('showDropDownMenu')
    },
  },
}
</script>

<style lang="scss" scoped>
@import './drop-down-style.scss';
@import './drop-down-query.scss';
</style>
