<script>
export default {
  data() {
    return {
      isMask: true,
      isOculto: false,
    };
  },
  methods: {
    ocultar() {
      this.isMask = false;
      this.isOculto = true;
    }
  },
  props: {
  }
};
</script>

<template>

  <div :class="{mask: isMask, oculto: isOculto }">
    <div class="modal-container">
      <header>
        <slot name="header">default header</slot>
      </header><br>
      <main>
        <slot name="body">default body</slot>
      </main><br>
      <footer>
        <slot name="footer">default footer</slot>
        <input type="submit" value="OK" @click="ocultar">
      </footer>
    </div>
  </div>

</template>

<style>
  .mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
  }

  .oculto{
    display: none;
  }

  .modal-container {
    width: 300px;
    height: 200px;
    margin: auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  }

  * {
    color: black;
  }

  header {
    font-size: larger;
    font-weight: bold;
  }

  input {
    margin: 0 0 0 80%;
  }
</style>
