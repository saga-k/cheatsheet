//Basic ----------------------------------------------
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

//Font Awesome ----------------------------------------------
// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import the specific icons you want to use
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

// Add the icons to the library
library.add(faPalette)
library.add(faTimes)

// Register the FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon)

//Vuetify ----------------------------------------------
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

app.use(vuetify)

//Mount ----------------------------------------------
app.use(router)
app.mount('#app')
