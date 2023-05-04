/*

    Crie uma lista de pacientes

    Cada paciente deverá conter 
        nome
        idade
        peso
        altura

    Escreva uma lista contendo o nome dos pacientes
*/
const patients = [
    {
        name: "Talles",
        age: 17,
        weight: 61.9,
        height: 1.74,
    },
    {
        name: "Miguel",
        age: 71,
        weight: 80.0,
        height: 1.72,
    },
    {
        name: "Diniz",
        age: 20,
        weight: 75.5,
        height: 1.78,
    },
]

let patientsNames = []
let patientsAge = []
let patientsWeight = []
let patientsHeight = []

for(let patient of patients) {
    patientsNames.push(patient.name)
    patientsAge.push(patient.age)
    patientsWeight.push(patient.weight)
    patientsHeight.push(patient.height)
}

for(let index = 0; index < patients.length; index++ ) {
    alert(`O(a) paciente ${patientsNames[index]} 
    tem a idade de ${patientsAge[index]} anos 
    tem o peso de ${patientsWeight[index]}kg
    e tem a altura de ${patientsHeight[index]}`)
}