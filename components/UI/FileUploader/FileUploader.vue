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
      <span v-if="cv">{{ $t('cvCaption') }}</span>
      <span v-else>{{ $t('uploadCaption') }}</span>
      <input
        accept=".pdf"
        type="file"
        name="file"
        @change="onFileUpload"
        @input="onSelectedFiles"
      />
    </div>

    <div v-if="!!errors && $i18n.locale === 'en'" class="error--message">
      PDF is required
    </div>

    <div v-if="!!errors && $i18n.locale === 'ar'" class="error--message">
      الرجاء تحميل الملف المطلوب بصيغة بي دي اف
    </div>

    <ul class="uploaded--files">
      <li v-if="!!file">
        <div>{{ file.name }}</div>
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
    errors: {
      type: String,
      default: '',
    },

    cv: {
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
      this.file = event.target.files[0]
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
@import './file-uploader-style.scss';
</style>
