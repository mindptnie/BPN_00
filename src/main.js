import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import storeVuex from './storeVuex'
import '../node_modules/flowbite/dist/flowbite'
import { createPinia } from 'pinia'
import * as VueGoogleMaps from 'vue3-google-map'

// import VueGoogleMaps from '@fawmi/vue-google-maps'

import './assets/main.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'



const app = createApp(App)
const pinia = createPinia()

// app.component("font-awesome-icon", FontAwesomeIcon);

app.use(pinia)

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyC0qZgYQi-BU425PNVPzhLQwJt_VIoBfXg'
    },
}
    )
app.use(router)
app.use(storeVuex)
app.component('Datepicker', Datepicker);

app.mount('#app')
