<script>
export default {
    data() {
        return {
            texto: "",
        }
    },
    methods: {
    },
    props: {
    },
}
</script>

<template>
    <input type="text" name="text" id="text" v-model="texto">
    <p>{{ texto }}</p>
</template>
