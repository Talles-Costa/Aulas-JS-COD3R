function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Lápis', 1.99))
console.log(criarProduto('Notebook', 4990.99))