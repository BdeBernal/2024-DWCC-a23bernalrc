import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Recurso from './components/Recurso.vue'
import GenerarNuevo from './components/GenerarNuevo.vue'
import Ventana from './components/Ventana.vue'

createApp(App).mount('#app')
const app = createApp(App);
app.component("Recurso", Recurso);
app.component("GenerarNuevo", GenerarNuevo);
app.component("Ventana", Ventana);

