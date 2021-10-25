import { createApp } from 'vue'
import App from './App.vue'
// import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import naive from 'naive-ui'

loadFonts()

createApp(App)
  .use(naive)
  .mount('#app')
