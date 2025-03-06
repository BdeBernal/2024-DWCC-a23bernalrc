<script>
import Recurso from './components/Recurso.vue'
import GenerarNuevo from './components/GenerarNuevo.vue';
export default {
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

    <component :is="currentTab"
      v-for="web in webs" 
      :id="web.id"
      :titulo="web.titulo"
      :descripcion="web.descripcion"
      :url="web.url"
      @eliminar="eliminarWeb"
    />

  </div>
</template>

<style>
</style>
