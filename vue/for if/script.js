const { createApp } = Vue;

createApp({
    data() {
        return {
            elementos: ["Comprar pan", "Estudiar 20min", "Dormir siesta"],
            nuevo: '',
            display: false,
            boton1: false,
            boton2: true,
        };
    },
    methods: {
        añadirNuevo() {
            if (this.nuevo != '') {
                this.elementos.push(this.nuevo);
            }
            this.nuevo = '';
        },
        ocultar(){
            this.display = this.boton1 = true;
            this.boton2 = false;

        },
        mostrar(){
            this.display = this.boton1 = false;
            this.boton2 = true;
        },
        borrarElemento(key) {
            this.elementos.splice(key, 1);
        }
    },
    watch: {
    },
    computed: {  
    },
}).mount("#app");
