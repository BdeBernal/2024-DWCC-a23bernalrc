<script>
export default {
  data() {
    return {
      text: "paco",
    }
  },
  methods: {
    cambiar() {
      if (this.text === this.text.toUpperCase()) {
        this.text = this.text.toLowerCase();
      } else {
        this.text = this.text.toUpperCase();
      }
    },
    añadir() {
      this.text += '!';
    },
  },
}
</script>

<template>
  <div id="app">
    <input type="text" name="text" id="text" v-model="text">
    <button @click="cambiar">Cambiar</button>
    <button @click="añadir">Añadir</button>

    <p>---------------------------------------------------</p>

    <Contador/> Incrementar

    <p>---------------------------------------------------</p>

    <Contact/>

  </div>
</template>

<style>
</style>
