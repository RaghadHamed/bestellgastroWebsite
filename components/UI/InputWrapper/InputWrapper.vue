<template>
  <div>
    <div class="input--wrapper">
      <label v-if="label">{{ label }}</label>
      <div>
        <input
          :style="`direction:${direction}`"
          :type="type"
          :value="value"
          :placeholder="placeholder"
          @input="$emit('update', $event.target.value)"
          @keypress="$emit('check', $event)"
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
@import './input-wrapper-style.scss';
@import './input-wrapper-query.scss';
</style>
