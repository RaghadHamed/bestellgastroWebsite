<template>
  <div>
    <div class="input--wrapper" :class="custom">
      <label v-if="label">{{ label }}</label>
      <div>
        <textarea
          :style="`direction:${direction}`"
          :type="type"
          :value="value"
          :placeholder="placeholder"
          @input="$emit('update', $event.target.value)"
        />
        <div v-if="!!errors" class="error--message">
          {{ errors }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'update',
  },

  props: {
    label: {
      type: [Boolean, String],
      default: false,
    },

    type: {
      type: String,
      default: 'text',
    },

    direction: {
      type: String,
      default: 'ltr',
    },

    custom: {
      type: String,
      default: '',
    },

    placeholder: {
      type: String,
      default: 'PlaceHolder',
    },

    value: {
      type: [String, Number],
      default: '',
    },

    errors: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import './text-area-wrapper-style.scss';
@import './text-area-wrapper-query.scss';
</style>
