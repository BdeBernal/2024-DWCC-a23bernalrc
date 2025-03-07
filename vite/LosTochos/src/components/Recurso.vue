<script>

export default {
  inject: ['webs'],
  components: {
  },
  data() {
    return {
      webs: this.webs
    }
  }
}
</script>

<template>
  <div v-for="web in webs" >
    <h2>{{ web.titulo }}</h2>
    <p>{{ web.descripcion }}</p>
    <a :href="web.url" target="_blank">Saber más</a>
    <p class="eliminar" @click="$emit('eliminar', web.id)">Eliminar</p>
    <br>
  </div>
  
</template>

<style>
.eliminar{
  cursor: pointer;
  color: rgb(179, 7, 7)
}
</style>
