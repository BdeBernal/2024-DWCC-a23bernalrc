import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Contador from './components/Contador.vue'
import Contact from './components/Contact.vue'

createApp(App).mount('#app')

const app = createApp(App);
app.component('Contador', Contador);
app.component('Contact', Contact);
app.mount('#app');
