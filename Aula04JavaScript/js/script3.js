/*# Lista de Exercícios - Estruturas Condicionais*/

/*1. Maior entre dois números
Faça um programa que peça dois números e imprima o maior deles.
*/
let numero1 = Number(prompt("Digite o primeiro número: "))
let numero2 = Number(prompt("Digite o segundo número: "))
if(numero1>numero2){
    alert("O maior número é: "+numero1)
}else {
    alert("O maior número é: "+numero2)
}

/*2. Número positivo ou negativo
Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo.
*/
let valor = Number(prompt("Digite um valor: "))
if (valor>= 0){
    alert("Positivo")
}else{
    alert("Negativo")
}

/*3. Identificação de sexo
Faça um programa que verifique se uma letra digitada é **"F"** ou **"M"**.

Conforme a letra digitada, exiba:

- F → Feminino
- M → Masculino
- Qualquer outra letra → Sexo inválido*/
let sexo = prompt("Digite F ou M:").toUpperCase()
if(sexo === "F"){
    alert("Feminino")
}else if(sexo ==="M"){
    alert(Masculino)
}else{
    alert("Sexo inválido")
}

/*4. Vogal ou consoante
Faça um programa que verifique se uma letra digitada é vogal ou consoante.
*/
let letra = prompt("Digite uma letra: ").toLowerCase
if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
    alert("Vogal")
}else{
    alert("Consoante")
}

/*5. Média de notas
Faça um programa para a leitura de duas notas parciais de um aluno.
Exiba:
- **Aprovado**, se a média for maior ou igual a 7;
- **Aprovado com Distinção**, se a média for igual a 10;
- **Reprovado**, se a média for menor que 7.*/
let nota1 = Number(prompt("Digite a primeira nota: "))
let nota2 = Number(prompt("Digite a segunda nota: "))
let media = (nota1 + nota2/2)

if (media === 10){
    alert("Aprovado com Distinção")
}else if (media>=7){
    alert("Aprovado")
}else{
    alert("Reprovado")
}

/*6. Maior de três números
Faça um programa que leia três números e mostre o maior deles.
*/
let n1 = Number(prompt("Digite o primeiro número: "))
let n2 = Number(prompt("Digite o segundo número: "))
let n3 = Number(prompt("Digite o terceiro número: "))
let maior = n1;
if(n2 > maior){
    maior = n2
}if (n3 > maior){
    maior = n3
} 
alert("O maior número é: "+maior)
