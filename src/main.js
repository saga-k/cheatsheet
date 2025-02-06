//Basic ----------------------------------------------
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

//Font Awesome ----------------------------------------------

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faExpand } from '@fortawesome/free-solid-svg-icons'
import { faObjectGroup } from '@fortawesome/free-solid-svg-icons'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


library.add(faPalette)
library.add(faTimes)
library.add(faExpand)
library.add(faObjectGroup)
library.add(faFileArrowDown)
library.add(faLinkedin)
library.add(faGithub)
library.add(faEnvelope)


app.component('font-awesome-icon', FontAwesomeIcon)

//Vuetify ----------------------------------------------
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  }
})

app.use(vuetify)

//Mount ----------------------------------------------
app.use(router)
app.mount('#app')
