function Triangulo(lado1, lado2, lado3) {
    this.lados = function() {
        if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
            console.log('Triangulo Equilátero')
        } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
            console.log('Triangulo Isóceles')
        } else {
            console.log('Triangulo Escaleno')
        }
    }
}

const t1 = new Triangulo(2, 2, 2)
t1.lados()
const t2 = new Triangulo(2, 2, 3)
t2.lados()
const t3 = new Triangulo(3, 2, 2)
t3.lados()
const t4 = new Triangulo(2, 3, 2)
t4.lados()
const t5 = new Triangulo(1, 2, 3)
t5.lados()