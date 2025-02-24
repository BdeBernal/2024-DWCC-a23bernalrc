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
    },
  },
  props: {
    nome: String,
    telefono: Number,
    correo: String,
    favorito: Boolean,
  }
};
</script>

<template>
    <div>
      <div>
        <h2>{{ nome }}</h2>
      </div>
      <p v-if="oculto">{{ telefono }}</p>
      <p v-if="oculto">{{ correo }}</p>
      <button @click="mostrar">{{ funcion }}</button>
    </div>
</template>

<style>
</style>
