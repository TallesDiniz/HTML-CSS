// Declaration
var name 

// Assignment
name = 'Talles'

// tipo de dado colocado
console.log(typeof name)

// Agrupamento de declarações
let age, IsHuman 
age = 17
IsHuman = true

// concatenando valores
console.log(name , age , IsHuman)
console.log('O', name , 'tem', age, 'anos')

// interpolando valores com template literals ou template strings
console.log(`o ${name} tem ${age} anos.`)

// Object
const person = {
    name: 'Talles',
    age: 17,
    weight: 62.3,
    isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos`)

// Array

const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Cat',
        age: 3
    }
]

// Acessar valores
console.log(animals[2])