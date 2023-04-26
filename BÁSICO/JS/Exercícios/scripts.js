// 1. Declare uma variável de nome weight
let weight

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight)

/* 3. Declare uma variável e atribua valores para cada um dos dados:
    *name: String
    *age: Number (integer)
    *stars: Number (float)
    isSubscribed: Boolean
*/

let name = 'Talles'
let age = 17
let stars = 5.5
let isSubscribed = true

/* 4. A variável student abaixo é de que tipo de dados?

4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.

4.2 Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto

*/

let student = {
    name: 'Talles',
    age: 17,
    weight: 62.5,
    isSubscribed: true,
};
console.log(student)
console.log(student.name, 'de idade', student.age, 'pesa', student.weight, 'kg' )


/* 5. Declare uma variável do tipo Array, de nome students e atribua a ela 
nenhum valor, ou seja, somente o Array vazio
*/ 

let students = []
console.log(students)

/* 6. Reatribua valor para a váriavel acima, colocando 
dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, 
mas usar o objeto criado e inserir ele no Array) 
*/  

students = [
    student
]
console.log(students)


/* 7. Coloque no console o valor da posição zero do Array acima
*/

console.log(students[0])

/* 8. Crie um novo student e coloque na posição 1 do Array students
*/

const talles = {
    name: 'Talles',
    age: 17,
    weight: 62.7,
    isSubscribed: false
}

students = [
    student,
    talles
]
console.log(students[1])

/* 9. Sem rodar o código responda, qual é a resposta do código abaixp e por que?
Após a sua resposta, rode o código e veja se acertou.

console.log(a)
var a = 1
*/

/*R: irá aparecer que o valor é undefined, porque a variável 'a' não foi declarada
antes de aparecer no console, ele também aparece undefined porque o var sofre o
hosting, que joga o var para cima, porém o número so é recebido depois do console.log 
*/

console.log(a)
var a = 1

// Acertei :)
