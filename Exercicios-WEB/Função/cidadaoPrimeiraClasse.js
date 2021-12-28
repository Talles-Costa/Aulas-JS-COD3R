// Função em JS é First-Class Object(Citizens) 
// Higger Order Function

// Criar de forma literal
function fun1() { }  //Onde dentro dos () é uma lista de parâmetros e dentro das {} é o corpo com o bloco de código com as sentenças

// Armazenar dentro de uma variável
const fun2 = function() { }

// Armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0] (2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// Como passar uma função como parâmetro pra outra função
function run(fun) {
    fun()
}

run(function () {console.log('Executando...')})

// Uma função pode retornar/conter outra função
function soma(a, b){
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)  // ou
const cincoMais = soma(2, 3)
cincoMais(4)