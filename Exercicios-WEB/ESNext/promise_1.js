function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

new Promise(function(resolve) {
    /* cumprirPromessa({
        x: 3,
        y: 4
    }) */
    //cumprirPromessa(3)
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))