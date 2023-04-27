new Vue({
    el: '#app',
    data: {
        reiniciar: false,
        ativar: false,
        vidaP: 100,
        vidaM: 100,
        playerLife: '100%',
        monsterLife: '100%',
    },
    methods: {
        attack() {
            let poder = [[], []];
            while (poder[0].length < 1 || poder[1].length < 1) {
                let poderPlayer = Math.floor(Math.random() * (15 - 4 + 1)) + 4;
                let poderMonster = Math.floor(Math.random() * (16 - 5 + 1)) + 5;
                    if (!poder[0].includes(poderPlayer)) {
                        poder[0].push(poderPlayer);
                    }
                    if (!poder[1].includes(poderMonster)) {
                        poder[1].push(poderMonster);
                    }
            }

            if (this.vidaM - poder[0][0] >= 0){
                this.vidaM -= poder[0][0];
                this.monsterLife = this.vidaM + '%'; 
            } 
            
            if (this.vidaP - poder[1][0] >= 0){
                this.vidaP -= poder[1][0];
                this.playerLife = this.vidaP + '%';
            } 
            
            if (this.vidaM - poder[0][0] <= 0)  {
                this.monsterLife = '0%'
                this.ativar = false
                this.reiniciar = true
            }

            if (this.vidaP - poder[1][0] <= 0) {
                this.playerLife = '0%'
                this.ativar = false
                this.reiniciar = true
            }
        }  
    },
    watch: {
        reiniciar(antigo, novo) {
            if( antigo == false ) {
                this.playerLife = '100%'
                this.monsterLife = '100%' 
                this.vidaP = 100
                this.vidaM = 100
            }
        }
    }
})