// function expression
// function anonymous

// parâmetros (parameters)
/*const sum = function(number1, number2) {
    let total = number1 + number2
    return total
}


let number1 = 34
let number2 = 25
sum(number1, number2)

console.log('o número 1 é', number1)
console.log('o número 2 é', number2)
console.log('a soma é', sum(number1, number2))
*/

// function scope
/*let subject = 'create video'

function createThink(subject){
    subject = 'study'
    return subject
}
console.log(createThink(subject))
console.log(subject)
*/

//function hoisting

/*sayMyName()

function sayMyName(){
    console.log('Heisenberg')
}
*/

// arrow function

/*const myNameIs = () => {
    console.log('Talles')
}

console.log(myNameIs)
*/

// callback function

/*function yourName(name) {
    console.log('antes de executar a função callback')
    
    name()
    
    console.log('depois de executar a função callback')
}

yourName(
    () => {
        console.log('estou em uma callback')
    }
)
*/

// Function() constructor

//  * expressão new
//  * criar um novo objeto
//  * this keyword

/*let date = new Date('2023-04-19')
console.log(date)
*/

/*function Person(name) {

    this.name = name
    this.walk = function () {
        return this.name + ' está andando'
    }
}
const talles = new Person('Talles')
const john = new Person('John')
console.log(talles.walk())
console.log(john.walk())
*/

/* Prototype
    
    *prototype-based language
    *prototype chain
    *__proto__ / *[[prototype]]
    
*/

/* Type conversion(typecasting) vs Type coersion

    *Alteração de um tipo de dado para outro tipo
*/

//console.log(Number('9') + 5)

// Manipulando Strings e Números

// Transformar String em Número e Número em String
/*let string = '45'
console.log(Number(string))
let number = 54
console.log(String(number))
*/

// Contar quantos caracteres tem uma palavra e quantos 
// digitos tem um número
/*let word = 'Pneumoultramicroscopicossilicovulcaniotico'
console.log(word.length)
let number = 12345
console.log(String(number).length)
*/

// Transformar um número quebrado com 2 casas decimais e trocar
// ponto por virgula
/*let number = 5345.4345
console.log(number.toFixed(2).replace('.', ','))
*/

// Transforme letras minúsculas em maiúsculas. Faça o contrário
//disso também
/*let word = 'Programar é legal!'
console.log(word.toLowerCase())
*/

// Separe um texto que contém espaços, em um novo array onde 
// cada texto é uma posição do array. Depois disso, transforme
// o array em um texto e onde eram espaços, coloque _

/*let phrase = 'Eu quero viver um Amor!'
let myArray = phrase.split(' ')
console.log(myArray)
let phraseWithUnderline = myArray.join('_')
console.log(phraseWithUnderline.toLowerCase())
*/

// Verificar se o texto contém a palavra Amor

/*let text = 'Eu quero ter um Amor!'
console.log(text.includes('Amor'))
*/

// Criar um Array com construtor
/*let myArray = new Array('a', 1, true,)
console.log(myArray) 
*/

// Contar elementos de um Array
/*console.log([
    'a',
    {type: 'array'},
    function() {return 'alo'},
].length)
*/

// Transformar uma cadeia de caracteres em elementos
// de uma Array
/*let word = 'Biluteteia'
console.log(Array.from(word))
*/

//let techs = ['html', 'css', 'js']

// Adicionar um item no fim
//techs.push('nodejs')

// adicionar no começo
//techs.unshift('sql')

// remover do fim
//techs.pop()

// remover do começo
//techs.shift()

// pegar somente alguns elementos do array
//console.log(techs.slice(1, 3))

// remover 1 ou mais itens em qualquer posição do array
//techs.splice(1, 2)

// encontrar a posição de um elemento no array
//let index = techs.indexOf('sql')
//techs.splice(index, 1)

/*console.log(techs)
*/

////////////////////////

/* Expressões e Operadores

- Expressions
- Operators
    Binary
    Unary
    Ternary
*/

//let number = 1 => Expressions

//console.log(number + 1) => Binary

//console.log(++number) => Unary

//console.log(false ? 'alo' : 'nada') => Ternary

////////////////////////

/* New
    * left-hand-side expression
    * criar um novo objeto

let date = new Date ('2023-04-24')
let name = new String('Talles')
name.surName = 'Diniz'
let age = new Number(17) 
console.log(name, age, date)
*/

////////////////////////

/* Operadores Unários
    * typeof
    * delete

const person = {
    name: 'Blaine',
    age: 23,
}
delete person.age

console.log(person)
*/

////////////////////////

/* Operadores Aritméticos
    
//   * Multiplicação *
// console.log(3*5)
    
//   * Divisão /
// console.log(3/5)

//   * Soma +
// console.log(3+5)

//   * Subtração -
// console.log(3-5)

//   * Resto da divisão %
// console.log(3%5)

//   * Incremento ++
// let increment = 0
// console.log(++increment)

//   * Decremento --
// let decrement = 0
// console.log(decrement --)
// console.log(decrement)

//   * Exponencial **
// console.log(3 ** 5)
*/

////////////////////////

/* Grouping operator ( )

let totaln = (2 + 3) * 5
let total = 'alo alo' + ' você'
console.log(total)
*/

////////////////////////

// Operadores lógicos (logical operators)

// - 2 valores booleanos, quando verificados,
// resultará em verdadeiro ou falso

// let pao = false
// let queijo = true

// AND &&
// console.log(pao && queijo)

// OR ||
// console.log(pao || queijo)

// NOT !
//console.log(!queijo)

////////////////////////

/* Operadores de atribuição (Assignment)
let x


// assignment
x = 1

// addition assignment
// x += 2

// subtraction assignment
// x -= 2

// multiplication assignment
// x *= 2

// division assignment
// x /= 2

// remainder, exponetiation
//x %= 2
// x **= 2
console.log(x)
*/

////////////////////////

// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos
// valores diferentes

// Condição então valor 1 se não valor 2
// Condition ? value1 : value2

// Exemplos 

/* Café da manhã top
let pao = true
let queijo = true

const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)


// Maior de 18
let age = 17
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)
*/

////////////////////////

// Operador de String (String operator)

// Comparison (comparação)
// console.log('a' == 'a')

// Concatenation (Concatenação)
// Retorna a união de duas Strings
// let alpha = "alpha"
// console.log(alpha + 345)

////////////////////////

/*  FALSY 
    Quando um valor é considerado false em contextos onde
    um booleano é obrigatório ( condicionais e loops ) 

    false
    0
    -0
    ""
    null
    undefined
    NaN


console.log( NaN ? 'verdadeiro' : 'falso')
*/

/* TRUTHY
   Quando um valor é considerado true em contextos onde um
   booleano é obrigatório ( condicionais e loops )
   
   true
   {}
   []
   1
   3.23
   "0"
   "false"
   -1
   infinity
   -infinity

console.log( -Infinity ? 'verdadeiro' : 'falso')
*/

////////////////////////

/* Operator precedence
    Precedência de operadores

* grouping                          ( )
* negação e incremento              ! ++ --
* multiplicação e divisão           * /
* adição e subtração                + -
* relacional                        < <= > >=
* igualdade                         == != === !==
* AND                               &&
* OR                                ||
* condicional                       ?:
* assignment (atribuição)           = += -= *=

*/

////////////////////////

/* Operadores de comparação

Irá comparar valores e retornar um Boolean como resposta à 
comparação



let one = 1
let two = 2

// == igual a
// console.log( two == 1 )
// console.log( one == "1" )

// != diferente de
// console.log( one != two )
// console.log( one != 1 )
// console.log( one != "1" )


let one = 1
let two = 2

// === estritamente igual a
// console.log( one === "1")
// console.log( one === 1 )

// !==  estritamente diferente
// console.log( two !== "2" )
// console.log( two !== 2 )
*/

////////////////////////

/* Control flow 

// se estiver sujo
console.log("Lavar o copo")

// se estiver limpo
console.log("Servir o café")
*/

////////////////////////

/* if...else
let temperatura = 37

if(temperatura >= 37.5) {
    console.log('Febre alta')
} else if(temperatura <= 37.5 && temperatura >= 37) {
    console.log('Febre média')
} else {
    console.log('Sem febre')
}
*/

////////////////////////

/* switch
function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log("Não implementado")
            break 
    }

    return result
}

console.log(calculate(5,'%', 5))
*/

////////////////////////

/* throw

function sayMyName(name = '') {
    if (name === '') {
        throw "Nome necessário"
    }

    console.log("Depois do erro")
}

// try...catch
try {
    sayMyName()
}catch(e) {
    console.log(e)
}

console.log("após ao try/catch")
*/

////////////////////////

/* Estrutura de repetição
// for - para
// break - para a execução do loop
// continue - pula a execução do momento

for(let i = 10; i > 0; i--) {
    if(i === 5) {
        continue;
    }
    console.log(i)
}
*/

////////////////////////

/* Estrutura de repetição
// while - enquanto

let i = 44444444444444575
while(i > 10) {
    console.log(i)
    i /= 35

}
*/

////////////////////////

/* for...of

let name = "Talles"
let names = ["João", "Paulo", "Pedro"]

for(let char of names) {
    console.log(char)
}
*/

////////////////////////

/* for...in

let person = {
    name: "James",
    age: 30,
    weight: 95.2
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}
*/

////////////////////////