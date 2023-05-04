/* 
    Solicitar o nome do aluno e as 3 notas 
    do bimestre, calcular a média daquele aluno.

    Se o aluno passou no bimestre, dar os parabens.

    se o aluno não passou no bimestre, motivar o aluno
    a dar o seu melhor na prova de recuperação.

    Em ambos os casos, mostre uma mensagem com o nome do
    aluno e a nota.
*/

let nameStudent = prompt("Digite o nome do(a) aluno(a): ")
let firstNote = prompt("Digite a primeira nota: ")
let secondNote = prompt("Digite a segunda nota: ")
let thirdNote = prompt("Digite a terceira nota: ")


let average = (Number(firstNote) + Number(secondNote) + Number(thirdNote)) / 3
average = average.toFixed(2)

if(average >= 6.0) {
    alert("O(a) aluno(a) " + nameStudent + " teve a média de " + average)
    alert("Parabens! o(a) aluno(a) " + nameStudent + " tirou a nota média para passar no bimestre.")
} else {
    alert("O(a) aluno " + nameStudent + " teve a média de " + average)
    alert("Infelizmente o(a) aluno(a) " + nameStudent + " não tirou a nota média do bimestre. Terá que dar o seu melhor na recuperação.")
}