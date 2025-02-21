<script>
export default {
  data() {
    return {
      info: {
        nome: "Paco",
        telefono: "64739375475",
        correo: "paco@gmail.com"
      },
        oculto: true,
        funcion: "Mostrar Detalles",
    };
  },
  methods: {
    mostrar() {
        this.oculto = !this.oculto;
        this.funcion = this.oculto ? "Mostrar Detalles" : "Ocultar Detalles";
    }
  }
};
</script>

<template>
  <p>{{ info.nome }}</p>
  <ul v-if="!oculto">
    <li v-for="(value, key) in info" :key="key">{{ key }}: {{ value }}</li>
  </ul>
  <button @click="mostrar">{{ funcion }}</button>
</template>

<style>
</style>
