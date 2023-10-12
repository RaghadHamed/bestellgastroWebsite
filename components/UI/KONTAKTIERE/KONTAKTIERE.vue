<template>
  <div :class="modalClass" class="modal--get--in-touch">
    <div class="modal--get--in--touch--right">
      <h3 class="get--in--touch--right--header">KONTAKTIERE UNS JETZT</h3>
      <ValidationObserver ref="form">
        <form class="get--in--touch--form" @submit.prevent="submitContactForm">
          
          <ValidationProvider v-slot="{ errors }" rules="required">
            <div class="get--in--touch--input--wrapper">
              <div>
                <input
                  v-model="name"
                  type="text"
                  placeholder="Name"
                />
                <div v-if="!!errors[0]" class="error--message">
                  {{ errors[0] }}
                </div>
              </div>
            </div>
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors }" rules="required|email">
            <div class="get--in--touch--input--wrapper">
              <div>
                <input
                  v-model="email"
                  type="email"
                  placeholder="E-mail Adresse"
                />
                <div v-if="!!errors[0]" class="error--message">
                  {{ errors[0] }}
                </div>
              </div>
            </div>
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors }" rules="required">
            <div class="get--in--touch--input--wrapper">
              
              <div>
                <input
                  v-model="Betreff"
                  type="text"
                  placeholder="Betreff"
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
              <div>
                <textarea
                  v-model="message"
                  placeholder="Deine Nachricht an uns"></textarea>
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
      Betreff: '0',
      email: '',
      message: '',
    }
  },

  methods: {},
}
</script>

<style lang="scss" scoped>
@import './get-in-touch-style.scss';
@import './get-in-touch-query.scss';
</style>
