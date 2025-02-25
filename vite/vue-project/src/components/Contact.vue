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
    id: Number,
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
        <h2 @click="$emit('engadirFav', id)">{{ nome }}{{ favorito ? '⭐' : '☆' }}</h2>
      </div>
      <p v-if="oculto">{{ telefono }}</p>
      <p v-if="oculto">{{ correo }}</p>
      <button @click="mostrar">{{ funcion }}</button>
      <button @click="$emit('eliminarContacto', id)">Eliminar</button>
    </div>
</template>

<style>
</style>
