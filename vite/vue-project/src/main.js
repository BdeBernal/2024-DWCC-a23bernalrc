import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Contador from './components/Contador.vue'
import Contact from './components/Contact.vue'
import Formulario from './components/Formulario.vue'

createApp(App).mount('#app')

const app = createApp(App);
app.component('Contador', Contador);
app.component('Contact', Contact);
app.component('Formulario', Formulario)
app.mount('#app');
