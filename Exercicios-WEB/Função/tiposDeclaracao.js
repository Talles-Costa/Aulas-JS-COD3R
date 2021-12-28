console.log(soma(3, 4))

// Function declaration - como o interpretador do JS carrega as funções desse tipo primeiro, se eu chamar a função antes dela ser declarada, ela irá funcionar
function soma(x, y) {
    return x + y
}

// Function Expression
const subtracao = function (x, y) {
    return x - y
}
console.log(subtracao(3, 4))

// Named Function Expression
const multiplicacao = function multiplicacao(x, y) {
    return x * y
}
console.log(multiplicacao(3, 4))