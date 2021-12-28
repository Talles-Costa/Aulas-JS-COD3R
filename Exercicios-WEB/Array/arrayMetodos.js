const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona elemento no final
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no primeiro elemento
console.log(pilotos)

// splice pode tanto adicionar como remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) 
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) //retorna um novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // o primeiro elemento entra e o ultimo não
console.log(algunsPilotos2)