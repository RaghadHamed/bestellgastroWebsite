<template>
  <div>
    <div
      :class="{ drag: dragging }"
      class="file--uploader"
      @drop.prevent="onDroppedFile"
      @dragover.prevent="dragging = true"
      @dragleave.prevent="dragging = false"
    >
      <svg class="icon">
        <use xlink:href="~/static/sprite.svg#icon-upload"></use>
      </svg>
      <span>{{ title }}</span>
      <input
        :accept="type"
        type="file"
        name="file"
        :multiple="multiple"
        @change="onFileUpload"
        @input="onSelectedFiles"
      />
    </div>

    <div v-if="!!errors" class="error--message">
      Please Upload Required File
    </div>

    <ul v-if="deleteText && !removeDelete" class="uploaded--files">
      <li class="delete--list">
        <div>{{ deleteText.split('/').pop() }}</div>
        <div class="delete--btn" @click="$emit('addFileToDelete')">Delete</div>
      </li>
    </ul>

    <ul v-if="!!file" class="uploaded--files">
      <li v-for="(item, index) in file" :key="index">
        <div>{{ item.name }}</div>
        <!-- <div class="progress--bar--wrapper">
          <div
            class="progress--bar--active"
            :style="`width: ${item.progress}%`"
          ></div>
          <div class="progress---bar--percentage">{{ item.progress }}%</div>
        </div> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Upload Required File',
    },
    errors: {
      type: String,
      default: '',
    },

    multiple: {
      type: Boolean,
      default: false,
    },

    type: {
      type: String,
      default: 'image/*',
    },

    deleteText: {
      type: String,
      default: '',
    },

    removeDelete: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      dragging: false,
      media: [],
      file: null,
    }
  },

  methods: {
    onFileUpload(event) {
      this.$emit('customChange', event)
      if (Object.keys(event.target.files).length > 3) return
      this.file = event.target.files
    },
    onDroppedFile($event) {
      this.dragging = false

      const files = [...$event.dataTransfer.items]
        .filter((item) => item.kind === 'file')
        .map((item) => item.getAsFile())

      files.forEach((file) => {
        this.media.unshift({
          file,
          progress: 0,
          error: null,
        })
      })
    },

    onSelectedFiles($event) {
      const files = [...$event.target.files]
        .filter((item) => item.kind === 'file')
        .map((item) => item.getAsFile())

      files.forEach((file) => {
        this.media.unshift({
          file,
          progress: 0,
          error: null,
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import './admin-file-uploader-style.scss';
</style>
