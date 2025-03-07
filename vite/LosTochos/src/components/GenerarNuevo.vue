<script>
import Ventana from './Ventana.vue';

export default {
  components: {
    Ventana,
  },  
  data() {
    return {
      titulo: "",
      descripcion: "",
      url: "",
      isOculto: true,
    }
  },
  methods: {
    quitarVentana() {
      this.isOculto = true;
    },
    botonCosas() {
      if (this.titulo && this.descripcion && this.url) {
        this.$emit('añadir', this.titulo, this.descripcion, this.url);
      }
    }
  }
}
</script>

<template>
  <br>
  Titulo: <input type="text" name="titulo" id="titulo" v-model="titulo"> <br>
  Descripción: <input type="text" name="descripcion" id="descripcion" v-model="descripcion"> <br>
  Url: <input type="text" name="url" id="url" v-model="url"> <br>
  <button @click="botonCosas">Enviar</button>
  <Ventana
    :class="{oculto: isOculto}"
    @quitar="quitarVentana"
  />
</template>

<style>
.oculto {
  display: none;
}
</style>