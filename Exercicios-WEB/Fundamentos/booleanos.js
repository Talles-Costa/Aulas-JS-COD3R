let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1; // valor 1 equivale a verdadeiro
console.log(!isAtivo); // ! significa negação
console.log(!!isAtivo); // !! traz a lógica ao valor original

console.log("Os verdadeiros:");
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('Os falsos:');
console.log(!!0);
console.log(!!''); // nesse caso, string vazia é falso. No caso acima, com espaço ou 'algo dentro' é true
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Pra finalizar:");
console.log(!!('' || null || 0 || ' ')); //No contexto de operações lógicas, você pode usa verdadeiro ou falso e ele vai transformar, dependendo do contexto, em verdadeiro ou falso