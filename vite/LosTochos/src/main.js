import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Recurso from './components/Recurso.vue'

createApp(App).mount('#app')
const app = createApp(App);
app.component("Recurso", Recurso);

