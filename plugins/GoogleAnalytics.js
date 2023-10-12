import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  Vue.use(
    VueGtag,
    {
      config: { id: 'G-H0PSPSDNK1' },
      appName: 'bestellgastro-pay',
    },
    app.router
  )
}
