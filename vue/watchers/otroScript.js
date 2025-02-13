const { createApp } = Vue;

createApp({
    data() {
        return {
            km: '',
            m: '',
        };
    },
    methods: {
        inputKm() {
            this.m = this.km * 1000;
        },
        inputM() {
            this.km = this.m / 1000;
        }
    },
}).mount("#app");