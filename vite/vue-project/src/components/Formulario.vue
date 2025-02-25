<script>
export default {
  data() {
    return {
        nome: "",
        telefono: "",
        correo: "",
    };
  },
  methods: {
      funcionesBoton() {
            this.$emit('nuevoContacto', this.nome, this.telefono, this.correo);
            this.nome = "";
            this.telefono = "";
            this.correo = "";
    }
  },
  props: {
  }
};
</script>

<template>
    <label for="nome">Nome:</label>
    <input type="text" name="nome" id="nome" v-model="nome"><br>
    <label for="telefono">Teléfono:</label>
    <input type="text" name="telefono" id="telefono" v-model="telefono"><br>
    <label for="correo">Correo:</label>
    <input type="text" name="correo" id="correo" v-model="correo"><br>
    <button @click="funcionesBoton">Engadir</button>
</template>

<style>
</style>
