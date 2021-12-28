function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

/* esperarPor()
    .then(() => console.log('Executando Promise 1!'))
    .then(esperarPor)
    .then(() => console.log('Executando Promise 2!'))
    .then(esperarPor)
    .then(() => console.log('Executando Promise 3!')) */

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar() {
    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`Asyn/Await ${valor}!`)

    await esperarPor(1500)
    console.log(`Asyn/Await ${valor + 1}!`)

    await esperarPor(1500)
    console.log(`Asyn/Await ${valor + 2}!`)
}

executar()
