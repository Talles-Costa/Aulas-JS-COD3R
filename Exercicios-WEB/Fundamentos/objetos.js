const prod1 = {} // forma literal de criar um objeto. Um objeo em javascript é um conjunto de chaves e valores. Você tem um nome de um atributo(identificador) e você passa um valor pra ele
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Final'] = 0.40; // Evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
}

console.log(prod2);