<script>
import Texto from './components/Texto.vue'
import Contador from './components/Contador.vue'

export default {
  components: {
    Texto,
    Contador,
  },
  data() {
    return {
      currentTab: 'Contador',
      tabs: ['Contador', 'Texto']
    }
  }
}
</script>

<template>
  <div id="app">
    <button v-for="tab in tabs" :key="tab" @click="currentTab = tab">
      {{ tab }}
    </button>
    <br>
    <KeepAlive>
      <component :is="currentTab"></component>
    </KeepAlive>
  </div>
</template>

<style>
</style>
