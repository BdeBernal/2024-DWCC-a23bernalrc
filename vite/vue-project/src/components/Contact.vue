<script>
export default {
  data() {
    return {
      oculto: false,
      funcion: "Mostrar Detalles",
    };
  },
  methods: {
    mostrar() {
      this.oculto = !this.oculto;
      this.funcion = this.oculto ? "Ocultar Detalles" : "Mostrar Detalles";
    }
  },
  props: {
    contacts: Array
  }
};
</script>

<template>
    <div v-for="contact in contacts" v-bind:key="contact.id">
      <h2>{{ contact.nome }}</h2>
      <p v-if="oculto">{{ contact.telefono }}</p>
      <p v-if="oculto">{{ contact.correo }}</p>
      <button @click="mostrar">{{ funcion }}</button>
    </div>
</template>

<style>
</style>
