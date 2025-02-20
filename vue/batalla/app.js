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
            elementos: [],
            contador: 3,
            cooldown: false,
        };
    },
    methods: {
        restartGame() {
            // Reiniciar el juego y reactivar botones
            this.showEndGame = this.deshabilitar = this.perder = this.ganar = this.cooldown = false;

            // Reiniciar vida y color
            this.playerHealth = this.enemyHealth = 100;
            this.pocaVidaPlayer = this.pocaVidaEnemy = "#00a876";

            // Reinicar log
            this.elementos = [];
        },
        rendirse() {
            // Mostrar mensaje correspondiente y desactivar botones
            this.showEndGame = this.perder = this.fin = this.deshabilitar = this.cooldown = true;
        },
        atacar() {
            // Ataque del jugador
            const damage = Math.floor(Math.random() * 10);
            if (damage > this.enemyHealth) {
                this.enemyHealth = 0;
                this.showEndGame = this.ganar = this.deshabilitar = true;
            } else {
                this.enemyHealth -= damage;
            }

            // Ataque del enemigo
            const damageEnemy = Math.floor(Math.random() * 10);
            if (damageEnemy > this.playerHealth) {
                this.playerHealth = 0;
                this.showEndGame = this.perder = this.deshabilitar = true;
            } else {
                this.playerHealth -= damageEnemy;
            }

            // Meter el turno en el log
            let log = "Vostede fixo " + damage + " de daño! - Monstro fixo " + damageEnemy + " de daño!";
            this.elementos.push(log);
            this.contador++;
            if (this.contador % 4 == 0) {
                this.cooldown = false;
            }
        },
        ataqueCritico() {
            let damage = Math.floor(Math.random() + 11);
            if (damage > this.enemyHealth) {
                this.enemyHealth = 0;
                this.showEndGame = this.ganar = this.deshabilitar = true;
            } else {
                this.enemyHealth -= damage;
                let log = "Vostede fixo " + damage + " de daño!";
                this.elementos.push(log);
                this.contador++;
            }

            const damageEnemy = Math.floor(Math.random() * 10);
            if (damageEnemy > this.playerHealth) {
                this.playerHealth = 0;
                this.showEndGame = this.perder = this.deshabilitar = true;
            } else {
                this.playerHealth -= damageEnemy;
            }

            this.contador++;
            if (this.contador % 4 != 0) {
                this.cooldown = true;
            }
        },
        curar() {
            if (this.playerHealth < 85) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }

            const damageEnemy = Math.floor(Math.random() * 10);
            if (damageEnemy > this.playerHealth) {
                this.playerHealth = 0;
                this.showEndGame = this.perder = this.deshabilitar = true;
            } else {
                this.playerHealth -= damageEnemy;
            }
            let log = "Vostede se curou 10 de vida! - Monstro fixo " + damageEnemy + " de daño!";
            this.elementos.push(log);

            this.contador++;
            if (this.contador % 4 == 0) {
                this.cooldown = false;
            }
        }
    },
    watch: {
        playerHealth(nuevo) {
            if (nuevo < 35) {
                this.pocaVidaPlayer = '#cf280a';
            } else {
                this.pocaVidaPlayer = '#00a876';
            }
        },
        enemyHealth(nuevo) {
            if (nuevo < 35) {
                this.pocaVidaEnemy = '#cf280a';
            } else {
                this.pocaVidaEnemy = '#00a876';
            }
        }
    },
    computed: {  
    },
},
).mount("#app");
