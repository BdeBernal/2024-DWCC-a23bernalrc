<script>
import Ventana from './components/Ventana.vue';


export default {
  data() {
    return {
      isModal: true,
    }
  },
  methods: {
    mostrar() {
      this.isModal = !this.isModal;
    }
  },
  props: {

  },
  
}
</script>

<template>

  <div id="app">
    <Ventana  :class="{modal: isModal}"/>
    <button @click="mostrar">Mostrar</button>
  </div>

</template>

<style>
.modal {
  display: none
}
</style>
