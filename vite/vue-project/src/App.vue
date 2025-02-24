<script>
export default {
  data() {
    return {
      text: "paco",
      info: [{
        nome: "Paco",
        telefono: "64739375475",
        correo: "paco@gmail.com"
      },
        {
          nome: "Pepe",
          telefono: "64739375475",
          correo: "pepesito@gmail.com"
      }
      ],
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

    <Contact :contacts="info"/>

  </div>
</template>

<style>
</style>
