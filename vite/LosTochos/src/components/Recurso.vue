<script>

export default {
  components: {
  },
  data() {
    return {
    }
    },
    props: {
        id: Number,
        titulo: String,
        descripcion: String,
        url: String,
  }
}
</script>

<template>
  <h2>{{ titulo }}</h2>
  <p>{{ descripcion }}</p>
  <a :href="url" target="_blank">Saber más</a>
  <p class="eliminar" @click="$emit('eliminar', id)">Eliminar</p>
  <br>
</template>

<style>
.eliminar{
  cursor: pointer;
  color: rgb(179, 7, 7)
}
</style>
