import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Addon from './componentes/Addon.vue';

createApp(App).mount('#app')

const app = createApp(App);
app.component('Addon', Addon);
app.mount('#app');
