import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  localize,
} from 'vee-validate'
import { required, email, length, min } from 'vee-validate/dist/rules'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

localize({
  en: {
    messages: {
      required: 'This field is required',
      email: 'This field must be an email',
      length: 'Please enter valid phone number',
      min: 'Password MUST be 8 characters at least',
      between: 'Characters number must be between {min} & {max}',
    },
  },

  ar: {
    messages: {
      required: 'هذا الحقل مطلوب',
      email: 'هذا الحقل يجب ان يكون بريد الكتروني',
      length: 'الرجاء ادخال رقم هاتف صالح',
      between: 'يجب أن يكون عدد المحارف بين {min} و {max}',
    },
  },
})

export default ({ app }) => {
  localize(app.i18n.locale)
}

extend('verify_password', {
  validate: (value) => {
    /*eslint-disable */
    const strongRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    )
    return strongRegex.test(value)
  },
  message:
    'The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)',
})

extend('required', required)
extend('email', email)
extend('length', length)
extend('min', min)
extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target
  },
  message: 'Password confirmation does not match',
})

extend('between', {
  params: ['min', 'max'],
  validate(value, { min, max }) {
    return (
      Number(min) <= Number(value.length) && Number(max) >= Number(value.length)
    )
  },
})

// extend('required', {
//   ...required,
//   message: 'This field is required',
// })

// extend('email', {
//   ...email,
//   message: 'This field must be an email',
// })

// extend('length', {
//   ...length,
//   message: 'Please enter valid phone number',
// })
