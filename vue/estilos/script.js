const { createApp } = Vue;

createApp({
    data() {
        return {
            isRed: false,
            classObject: {
                greenClass: true,
                yellowClass: false,
            },
            activa: {
                celda: false,
            }
        };
    },
    methods: {
        cambiar() {
            this.isRed = !this.isRed;
        },
        alternar() {
            this.classObject.greenClass = !this.classObject.greenClass;
            this.classObject.yellowClass = !this.classObject.yellowClass;   
        },
        lasCeldas() {
            this.activa.celda = !this.activa.celda;
        }
    },
}).mount("#app");
