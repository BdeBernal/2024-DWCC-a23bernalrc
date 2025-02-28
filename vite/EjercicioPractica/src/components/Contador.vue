<script>
export default {
    data() {
        return {
            contador: 0,
        }
    },
    methods: {
        incrementar() {
            this.contador++;
        }
    },
    props: {
    },
}
</script>

<template>
    <p v:model="contador">{{ contador }}</p>
    <button @click="incrementar">Incrementar</button>
</template>
