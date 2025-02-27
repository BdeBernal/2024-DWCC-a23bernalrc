import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Ventana from './components/Ventana.vue'

createApp(App).mount('#app')
const app = createApp(App);
app.component('Ventana', Ventana);
app.mount('#app');
