<script>
import Formulario from './components/Formulario.vue';

export default {
  data() {
    return {
      text: "paco",
      info: [{
        id: 0,
        nome: "Paco",
        telefono: "64739375475",
        correo: "paco@gmail.com",
        favorito: false,
      },
        {
          id: 1,
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
    ponerFav(id) {
      this.info[id].favorito = !this.info[id].favorito;
    },
    engadirNuevo(nome, telefono, correo) { 
      this.info.push({
        id: this.info.length,
        nome: nome,
        telefono: telefono,
        correo: correo,
        favorito: false,
      });
    },
    eliminar(id) {
      this.info = this.info.filter(contact => contact.id !== id);
    }
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
      :id="infoDetails.id"
      :nome="infoDetails.nome"
      :telefono="infoDetails.telefono"
      :correo="infoDetails.correo"
      :favorito="infoDetails.favorito"
      @engadirFav="ponerFav"
      @eliminarContacto="eliminar"/>

    <p>---------------------------------------------------</p>

    <h2>Añadir Contacto</h2>

    <Formulario @nuevoContacto="engadirNuevo"/>

  </div>
</template>

<style>
</style>
