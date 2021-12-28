function Valores(valor1, valor2) {
    this.soma = function() {
        return console.log(`Soma = ${valor1 + valor2}`)
    }

    this.sub = function() {
        return console.log(`Subtração = ${valor1 - valor2}`)
    }

    this.mult = function() {
        return console.log(`Multplicação = ${valor1 * valor2}`)
    }

    this.divs = function() {
        return console.log(`Divisão = ${valor1 / valor2}`)
    }
}

const v1 = new Valores(12, 3)
v1.soma()
v1.sub()
v1.mult()
v1.divs()