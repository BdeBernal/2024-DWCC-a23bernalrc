const { createApp } = Vue;
createApp({
    data() {
        return {
            text: '',
            area: '',
            radio: '',
            checkboxes: [],
            select: ''
        };
    },
    methods: {
        resetForm() {
            this.text = '';
            this.area = '';
            this.radio = '';
            this.checkboxes = [];
            this.select = '';
        }
    }
}).mount("#app");
