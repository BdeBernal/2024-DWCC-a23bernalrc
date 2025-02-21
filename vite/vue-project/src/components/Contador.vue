<script>
export default {
  data() {
    return {
        contador: 0,    
    }
  },
  methods: {
    incrementar() {
        this.contador += 1;
    }
  },
}
</script>

<template>
    <button @click="incrementar">{{ contador }}</button>
</template>

<style>
</style>
