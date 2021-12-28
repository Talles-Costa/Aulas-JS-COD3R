const valores = [7.7, 8.9, 6.3, 9.2]; //Declaração de forma literao com colchetes
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores);

// valores[8] = 10;
// console.log(valores); nesse caso ele mostra quantas casa estão vazias e depois acessa o indice 8

console.log(valores.length);

valores.push({id: 3}, false, null, 'teste');
console.log(valores);

console.log(valores.pop()); // 'sacou' e deletou o ultimo elemento
delete valores[0];
console.log(valores);

console.log(typeof valores);