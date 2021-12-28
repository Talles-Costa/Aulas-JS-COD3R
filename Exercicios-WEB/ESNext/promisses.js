function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //Aceita apenas um parametro
            //reject(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que Legal!')
    .then(frase => frase.concat('?!?')) // Tratamento de sucesso
    .then(outraFrase => console.log(outraFrase)) //O resultado de um then passa para outro then
    .catch(e => console.log(e)) // Tratamento de erro