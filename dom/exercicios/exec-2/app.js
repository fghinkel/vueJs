new Vue({
    el: '#desafio',
    data: {
        valor: '',
        guarda: '',
    },
    methods: {
        alerta(){
            alert('Exibir alerta!')
        },
        armazenarValor(event){
            this.valor = event.target.value
        }
    }
})