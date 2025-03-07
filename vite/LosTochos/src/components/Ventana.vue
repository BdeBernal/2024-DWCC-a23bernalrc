<script>

export default {
  components: {
  },
  data() {
    return {
    }
  }
}
</script>

<template>
    <div class="mask">
    <div class="modal-container">
      <main>
        <slot name="body">Campos incompletos</slot>
        <input type="submit" value="OK" @click="$emit('quitar')">
      </main>
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
  .modal-container {
    width: 300px;
    height: 75px;
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
</style>
