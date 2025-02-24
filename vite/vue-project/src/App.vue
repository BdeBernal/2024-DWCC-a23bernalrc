<script>
export default {
  data() {
    return {
      text: "paco",
      info: [{
        nome: "Paco",
        telefono: "64739375475",
        correo: "paco@gmail.com",
        favorito: false,
      },
        {
          nome: "Pepe",
          telefono: "64739375475",
          correo: "pepesito@gmail.com",
          favorito: false,
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

    <Contact v-for="infoDetails in info" 
      :key="infoDetails.id"
      :nome="infoDetails.nome"
      :telefono="infoDetails.telefono"
      :correo="infoDetails.correo"
      :favorito="infoDetails.favorito"/>

  </div>
</template>

<style>
</style>
