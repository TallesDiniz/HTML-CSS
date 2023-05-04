/*
   ** Jogo da advinhação **

   Apresente a mensagem ao usuário:
   "Adivinhe o número que estou pensando? Está entre 0 e 10"

   Crie uma lógica para gerar um número aleatório gerado pelo
   sitema.

   Enquanto o  usuário não avinhar o número, mostrar a mensagem:
   "Erro, tente novamente:"

   Caso o usuário acerte o número, apresentar a mensagem:
   "Parabens! Você advinhou o número em x tentativas"
   
   Substitua o 'x' da mensagem, pelo número de tentativas
   */
  
  const randomNumber = Math.round(Math.random() * 10)
  console.log(randomNumber)
  let result = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10")

let attempts = 1

while(Number(result) != randomNumber) {
    result = prompt("Erro, tente novamente: ")
    attempts++
}

if(attempts == 1) {
    alert(`Parabens! O número que eu pensei foi ${randomNumber} e Você advinhou o número em ${attempts} tentativa`)
} else {
    alert(`Parabens! O número que eu pensei foi ${randomNumber} e Você advinhou o número em ${attempts} tentativas`)
}
