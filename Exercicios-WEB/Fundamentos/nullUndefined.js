let valor // não inicializada
console.log(valor);

valor = null; // ausencia de valor
console.log(valor);

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined //evite atribuir
//delete produto.preco forma correta de retirar um valor
console.log(!!produto.preco);
console.log(produto)

produto.preco = null; // sem preco
console.log(!!produto.preco);
console.log(produto);