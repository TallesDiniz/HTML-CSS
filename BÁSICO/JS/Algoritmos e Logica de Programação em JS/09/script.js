/*
    Dada uma lista de pacientes, descubra o IMC de cada paciente e
    imprima

    "Paciente X possui o IMC de: Y"

    Onde X é o nome do paciente e Y é o IMC desse paciente

    Crie uma função para fazer o calculo de IMC
*/

/* peso / (altura * altura) */

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

function calculation(weight, height) {
    return (weight / (height ** 2)).toFixed(1)
}

const patientIMC = (patients) => {
   return `
    Paciente ${patients.name} possui o IMC de:
    ${calculation(patients.weight, patients.height)} 
    `
}

for (let patient of patients) {
    let message =  patientIMC(patient)
    alert(message)
   
}