const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(8)
imprimirResultado(6.5)
imprimirResultado('Epa!') //Cuidado, fracamente tipado