/* 
    Capturar 2 números 
    e fazer as operações matemáticas
    de soma, subtração, multiplicação,
    divisão e resto da divisão

    E para cada operação mostrar um alerta
    com o resultado.
*/

alert("Digite 2 números e então farei as operações matemáticas")
let firstNumber = prompt("Digite o primeiro número: ")
let secondNumber = prompt("Digite o segundo número: ")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const addition = firstNumber + secondNumber
const subtration = firstNumber - secondNumber
const multiplication = firstNumber * secondNumber
const division = firstNumber / secondNumber
const restOfDivision = firstNumber % secondNumber

alert("Adição: " + addition)
alert("Subtração: " + subtration)
alert("Multiplicação: " + multiplication)
alert("Divisão: " + division)
alert("Resto da divisão: " + restOfDivision)