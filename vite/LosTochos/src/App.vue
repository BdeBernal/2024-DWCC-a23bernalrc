<script>
import Recurso from './components/Recurso.vue'
import GenerarNuevo from './components/GenerarNuevo.vue';

export default {
  provide() {
    return {
      webs: this.webs
    }
  },
  components: {
    Recurso,
    GenerarNuevo,
  },
  data() {
    return {
      webs: [
        { id: 1, titulo: "Google", descripcion: "Navegador web mas usado", url: "http://www.google.es" },
        { id: 2, titulo: "Facebook", descripcion: "Red social narcotráfico", url: "http://www.facebook.com" }
      ],
      currentTab: 'Recurso',
      tabs: ['Recurso', 'GenerarNuevo'],
    }
  },
  methods: {
    eliminarWeb(id) {
      const este = this.webs.findIndex(i => i.id === id);
      this.webs.splice(este, 1);
    },
    añadirWeb(titulo, descripcion, url) {
      let ultimo = this.webs.length + 1
      let nuevo = {
        "id": ultimo,
        "titulo": titulo,
        "descripcion": descripcion,
        "url": url
      };
      this.webs.push(nuevo);
      this.currentTab = 'Recurso';
    }
  }
}
</script>

<template>
  <div id="app">

    <button
      v-for="tab in tabs"
      :key="tab"
      @click="currentTab = tab"
    >
    {{ tab }}
    </button>
    <br>
    <component :is="currentTab"
      @eliminar="eliminarWeb"
      @añadir="añadirWeb"
    />

  </div>
</template>

<style>
</style>
