// Não aceita repetição / Não é indexada
const times = new Set()
times.add('Vasco')
times.add('Flamengo').add('São Paulo').add('Palmeiras')
times.add('Atlético Mineiro')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)