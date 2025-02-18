const { createApp } = Vue;
createApp({
    data() {
        return {
            showEndGame: false,
            perder: false,
            ganar: false,
            empatar: false,
            fin: false,
            deshabilitar: false,
            playerHealth: 100,
            enemyHealth: 100,
            pocaVidaPlayer: "",
            pocaVidaEnemy: "",
        };
    },
    methods: {
        restartGame() {
            // Reiniciar el juego y reactivar botones
            this.showEndGame = this.deshabilitar = this.perder = this.ganar = false;
            this.playerHealth = this.enemyHealth = 100;
            this.pocaVidaPlayer = this.pocaVidaEnemy = "#00a876";
        },
        rendirse() {
            // Mostrar mensaje correspondiente y desactivar botones
            this.showEndGame = true;
            this.perder = true;
            this.fin = true;
            this.deshabilitar = true;
        },
        atacar() {
            // Ataque del jugador
            const damage = Math.floor(Math.random() * 10);
            if (damage > this.enemyHealth) {
                this.enemyHealth = 0;
                this.showEndGame = true;
                this.ganar = true;
                this.deshabilitar = true;
            } else {
                this.enemyHealth -= damage;
            }
           

            // Ataque del enemigo
            const damageEnemy = Math.floor(Math.random() * 10);
            console.log(damageEnemy)
            if (damageEnemy > this.playerHealth) {
                this.playerHealth = 0;
                this.showEndGame = true;
                this.perder = true;
                this.deshabilitar = true;
            } else {
                this.playerHealth -= damageEnemy;
            }
        },
        ataqueCritico() {
            let damage = Math.floor(Math.random() + 11);
            damage *= (Math.floor(Math.random() * 2)); // Para que no sea tan fácil tiene tasa de éxito
            console.log(damage)
            if (damage > this.enemyHealth) {
                this.enemyHealth = 0;
                this.showEndGame = true;
                this.ganar = true;
                this.deshabilitar = true;
            } else {
                this.enemyHealth -= damage;
            }
        },
        curar() {
            if (this.playerHealth < 85) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            
        }
    },
    watch: {
        playerHealth(nuevo) {
            if (nuevo < 35) {
                this.pocaVidaPlayer = '#cf280a';
            }
        },
        enemyHealth(nuevo) {
            if (nuevo < 35) {
                this.pocaVidaEnemy = '#cf280a';
            }
        }
    },
    computed: {  
    },
},
).mount("#app");
