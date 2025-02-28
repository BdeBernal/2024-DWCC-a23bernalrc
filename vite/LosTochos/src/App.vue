<script>
import Recurso from './components/Recurso.vue'
export default {
  components: {
    Recurso
  },
  data() {
    return {
      webs: [
        { id: 1, titulo: "Google", descripcion: "Navegador web mas usado", url: "www.google.com" }
      ]
    }
  }
}
</script>

<template>
  <div id="app">
  </div>
</template>

<style>
</style>
