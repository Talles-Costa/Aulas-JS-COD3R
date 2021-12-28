function Divisao(dividendo, divisor) {
    this.divis = function() {
        console.log(`Resultado = ${dividendo / divisor}`)
    }
    this.rest = function() {
        console.log('Resto da Divisão = ' + (dividendo % divisor))
    }
}

const calc1 = new Divisao(9, 3)
calc1.divis()
calc1.rest()

const calc2 = new Divisao(10, 3)
calc2.divis()
calc2.rest()