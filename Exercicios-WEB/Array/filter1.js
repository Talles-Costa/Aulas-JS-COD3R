const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
] //no filter é retornado o elemento true ou false

console.log(produtos.filter(function(p, i) { 
    return false
}))

const fragil = produto => produto.fragil
const caro = produto => produto.preco >= 500

console.log(produtos.filter(fragil).filter(caro))