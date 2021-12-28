function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Olá, meu nome é ${nome}`)
    }
}

const p1 = new Pessoa('Talles')
p1.falar()