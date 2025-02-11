const { createApp } = Vue;
createApp({
    data() {
        return {
            resultado: 0,
            letra: "",
        };
    },
    methods: {
    },
    watch: {
        letra(nuevo, anterior) {
            if (nuevo % 2 == 0) {
                this.letra = "Es par";
            }
        }
    },
    computed: {
    },
}).mount("#app");