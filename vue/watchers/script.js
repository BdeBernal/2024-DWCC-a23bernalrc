const { createApp } = Vue;
let body = document.querySelector('body');
createApp({
    data() {
        return {
            numero1: 0,
            numero2: 0,
            resultado: 0,
            texto: " ",
        };
    },
    methods: {
    input() {
        this.resultado = parseInt(this.numero1) + parseInt(this.numero2);
    }
    },
    watch: {
        resultado(nuevo) {
            if (nuevo != 0 && nuevo % 2 == 0) {
                this.texto = "El resultado es par";
            } else if (nuevo != 0 && nuevo % 2 != 0) {
                this.texto = "El resultado es impar";
            }
    },
    computed: {  
    },
},
}).mount("#app");
