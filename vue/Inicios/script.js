const { createApp } = Vue;
let hoy = new Date().getFullYear();
createApp({
    data() {
        return {
            nombre: "Bernal",
            ano: hoy,
            suma: hoy + 5,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xI1LqxCGglcQZVVo_XEg-9r1zZ4tZfDE3A&s",
            completo: "Bernal",
            contador: 0,
        };
    },
    methods: {
        mas() {
            this.contador++;
        },
        menos() {
            this.contador--;
        }
    },
    computed: {
        propiedadCalculada() {
            return this.contador > 2 ? "Mayor a 2" : "Menor a 2";
        }
    },
    watch: {
        
    }
}).mount("#app");