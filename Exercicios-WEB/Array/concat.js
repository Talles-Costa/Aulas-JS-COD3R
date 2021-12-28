const filhas = ['Aline', 'Natalia']
const filhos = ['João', 'Guto']
const todos = filhas.concat(filhos, 'Fulano') // Além de concatenar, podemos adicionar
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))