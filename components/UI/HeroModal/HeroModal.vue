<template>
  <div :class="modalClass" class="modal--get--in-touch">
    <div class="modal--get--in--touch--right">
      <h3 class="get--in--touch--right--header">Lass uns zusammenarbeiten!</h3>
      <p>
        Das BestellGastro Team freut sich darauf, zusammen mit dir individuelle
        Lösungen für dein Unternehmen zu erarbeiten
      </p>
      <ValidationObserver ref="form">
        <form class="get--in--touch--form" @submit.prevent="submitContactForm">
          <ValidationProvider v-slot="{ errors }" rules="required">
            <div class="get--in--touch--input--wrapper">
              <div>
                <vSelect
                  v-model="select"
                  :options="select1"
                  label="name"
                  :placeholder="Frau"
                ></vSelect>
                <div v-if="!!errors[0]" class="error--message">
                  {{ errors[0] }}
                </div>
              </div>
            </div>
          </ValidationProvider>
          <div class="list2">
            <ValidationProvider
            id="paymentCheckBox"
            v-slot="{ errors }"
            :rules="{ required: { allowFalse: false } }"
          >
            <div
              class="get--in--touch--input--wrapper get--in--touch--textarea--wrapper"
              style="display: flex;"
            >
              <div>
                <input
                  id="checkbox"
                  v-model="BroCheckBox"
                  type="checkbox"
                  required
                />
              </div>
              <label>
                <p>
                  Großhande
                </p></label
              >
            </div>
            <div v-if="!!errors[0]" class="error--message">
              {{ errors[0] }}
            </div>
          </ValidationProvider>
          <ValidationProvider
            id="paymentCheckBox"
            v-slot="{ errors }"
            :rules="{ required: { allowFalse: false } }"
          >
            <div
              class="get--in--touch--input--wrapper get--in--touch--textarea--wrapper"
              style="display: flex;"
            >
              <div>
                <input
                  id="checkbox"
                  v-model="RestaurantCheckBox"
                  type="checkbox"
                  required
                />
              </div>
              <label>
                <p>
                  Restaurant
                </p></label
              >
            </div>
            <div v-if="!!errors[0]" class="error--message">
              {{ errors[0] }}
            </div>
          </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" rules="required">
              <div class="get--in--touch--input--wrapper">
                <div>
                  <input v-model="Vorname" type="text" placeholder="Vorname" />
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
                    v-model="Nachname"
                    type="text"
                    placeholder="Nachname"
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
                    v-model="Telefonnummer"
                    type="phone"
                    placeholder="Telefonnummer: "
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
                  <input v-model="Firma" type="text" placeholder="Firma" />
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
                    v-model="Hausnummer"
                    type="text"
                    placeholder="Straße & Hausnummer"
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
                  <input v-model="PLZ" type="text" placeholder="PLZ" />
                  <div v-if="!!errors[0]" class="error--message">
                    {{ errors[0] }}
                  </div>
                </div>
              </div>
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" rules="required">
              <div class="get--in--touch--input--wrapper">
                <div>
                  <input v-model="Ort" type="text" placeholder="Ort" />
                  <div v-if="!!errors[0]" class="error--message">
                    {{ errors[0] }}
                  </div>
                </div>
              </div>
            </ValidationProvider>
          </div>
          <ValidationProvider v-slot="{ errors }" rules="required">
            <div
              class="get--in--touch--input--wrapper get--in--touch--textarea--wrapper"
            >
              <div>
                <textarea
                  v-model="Nachricht"
                  placeholder="Nachricht"
                ></textarea>
                <div v-if="!!errors[0]" class="error--message">
                  {{ errors[0] }}
                </div>
              </div>
            </div>
          </ValidationProvider>
          <ValidationProvider
            id="paymentCheckBox"
            v-slot="{ errors }"
            :rules="{ required: { allowFalse: false } }"
          >
            <div
              class="get--in--touch--input--wrapper get--in--touch--textarea--wrapper"
              style="display: flex;"
            >
              <div>
                <input
                  id="checkbox"
                  v-model="paymentCheckBox"
                  type="checkbox"
                  required
                />
              </div>
              <label>
                <p>
                  Indem Du auf „Absenden“ klickst, erklärst Du dich mit den
                  Allgemeinen Geschäftsbedingungen und Datenschutzerklärung
                  einverstanden.
                </p></label
              >
            </div>
            <div v-if="!!errors[0]" class="error--message">
              {{ errors[0] }}
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
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
export default {
  components: { vSelect },
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
      Vorname: '',
      Nachname: '',
      Telefonnummer: '0',
      email: '',
      Firma: '',
      Hausnummer: '',
      Ort: '',
      PLZ: '',
      Nachricht: '',
      select:'',
      paymentCheckBox: false,
      BroCheckBox:false,
      RestaurantCheckBox:false,
      select1: [{ name: 'Frau' }, { name: 'Herr' }, { name: 'Diverse' }],

    }
  },

  methods: {},
}
</script>

<style lang="scss" scoped>
@import './get-in-touch-style.scss';
@import './get-in-touch-query.scss';
</style>
