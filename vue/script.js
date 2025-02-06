const { createApp } = Vue;
createApp({
    data() {
        return {
            cadena: "<b>Ola mundo!</b>",
            numero: 2,
            boolean: true,
            array: [1, "si", 2, false],
            objeto: {
                color: "blanco",
                edad: 5
            },
        };
    },
    methods: {
        increment() {
            this.numero++;
        }
    }
}).mount("#app");