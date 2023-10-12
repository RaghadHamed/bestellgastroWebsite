<template>
  <div :class="modalClass" class="modal--get--in-touch">
    <div class="modal--get--in--touch--left">
      <h2 class="get--in--touch--header">{{ $t('getInTouchModal') }}</h2>
      <p class="get--in--touch--description">
        {{ getInTouch.content }}
      </p>
      <ul class="get--in--touch--list">
        <li
          v-for="contact in getContactUs"
          :key="contact.id"
          class="get--in--touch--list--item"
        >
          <svg class="icon">
            <use
              v-if="contact.type === 'phone'"
              xlink:href="~/static/sprite.svg#icon-phone"
            ></use>
            <use
              v-if="contact.type === 'email'"
              xlink:href="~/static/sprite.svg#icon-mail"
            ></use>
            <use
              v-if="contact.type === 'address'"
              xlink:href="~/static/sprite.svg#icon-pin"
            ></use>
          </svg>
          <a v-if="contact.type === 'phone'" :href="`tel:${contact.content}`">{{
            contact.content
          }}</a>
          <a
            v-if="contact.type === 'email'"
            :href="`mailto:${contact.content}`"
            >{{ contact.content }}</a
          >
          <a
            v-if="contact.type === 'address'"
            :href="`http://maps.google.com/?q=`"
            >{{ contact.content }}</a
          >
        </li>
      </ul>
    </div>

    <div class="modal--get--in--touch--right">
      <h3 class="get--in--touch--right--header">
        {{ $t('getInTouchRightHeader') }}
      </h3>
      <ValidationObserver ref="form">
        <form class="get--in--touch--form" @submit.prevent="submitContactForm">
          <ValidationProvider v-slot="{ errors }" rules="required">
            <div class="get--in--touch--input--wrapper">
              <label>{{ $t('getInTouchNameInput') }}</label>
              <div>
                <input
                  v-model="name"
                  type="text"
                  :placeholder="$t('getInTouchNameInputPlaceholder')"
                />
                <div v-if="!!errors[0]" class="error--message">
                  {{ errors[0] }}
                </div>
              </div>
            </div>
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors }" rules="required|length:10">
            <div class="get--in--touch--input--wrapper">
              <label>{{ $t('phoneNumber') }}</label>
              <div>
                <input v-model="phone" type="tel" placeholder="0 --- --- ---" />
                <div v-if="!!errors[0]" class="error--message">
                  {{ errors[0] }}
                </div>
              </div>
            </div>
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors }" rules="required|email">
            <div class="get--in--touch--input--wrapper">
              <label>{{ $t('getInTouchEmailInput') }}</label>
              <div>
                <input
                  v-model="email"
                  type="email"
                  placeholder="jonedoe@email.com"
                />
                <div v-if="!!errors[0]" class="error--message">
                  {{ errors[0] }}
                </div>
              </div>
            </div>
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors }" rules="required">
            <div
              class="get--in--touch--input--wrapper get--in--touch--textarea--wrapper"
            >
              <label>{{ $t('getInTouchMessageInput') }}</label>
              <div>
                <textarea
                  v-model="message"
                  :placeholder="$t('getInTouchMessageInputPlaceholder')"
                />
                <div v-if="!!errors[0]" class="error--message">
                  {{ errors[0] }}
                </div>
              </div>
            </div>
          </ValidationProvider>

          <div class="btn--form">
            <UIBaseButton v-if="!isLoading" btn-class="btn--secondary">
              <span>{{ $t('getInTouchSubmit') }}</span>
              <svg class="icon">
                <use xlink:href="~/static/sprite.svg#icon-chevron-right"></use>
              </svg>
            </UIBaseButton>
            <div v-if="isLoading" class="spinner--wrapper">
              <UILoadingSpinner />
            </div>
          </div>
          <div v-show="!!successMessage" class="success--wrapper">
            <p class="success--text">
              {{ successMessage }}
            </p>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    modalClass: {
      type: String,
      default: '',
    },

    modalActive: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isLoading: false,
      name: '',
      phone: '0',
      email: '',
      message: '',
    }
  },


  watch: {
    // whenever question changes, this function will run
    modalActive(newVal, oldVal) {
      if (newVal === false && oldVal === true) {
        this.resetForm()
      }
    },
  },

  methods: {
   

  },
}
</script>

<style lang="scss" scoped>
@import './get-in-touch-style.scss';
@import './get-in-touch-query.scss';
</style>
