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

/*7. Maior e menor de três números
Faça um programa que leia três números e mostre o maior e o menor deles.
*/
let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))
let num3 = Number(prompt("Digite o terceiro número: "))

let maior = num1
let menor= num1

if(n2>maior){
    maior = num2
}
if(n3>maior){
    maior = num3
}
if(n2<menor){
    menor = num2
}
if(n3<menor){
    menor = num3
}
alert("Maior: "+maior+"\nMenor: "+menor)

/*8. Produto mais barato
Faça um programa que pergunte o preço de três produtos e informe qual produto deve ser comprado, sabendo que a decisão é sempre pelo mais barato.
*/
let p1 = Number(prompt("Digite o preço do produto 1: "))
let p2 = Number(prompt("Digite o preço do produto 2: "))
let p3 = Number(prompt("Digite o preço do produto 3: "))

if(p1 < p2 && p1 < p3){
    alert("Compre o produto 1")
}else if(p2<p1 && p2<p3){
    alert("Compre o produto 2")
}else{
    alert("Compre o produto 3")
}

/*9. Ordem decrescente
Faça um programa que leia três números e mostre-os em ordem decrescente.
*/
let a = Number(prompt("Digite o primeiro número: "))
let b = Number(prompt("Digite o segundo número: "))
let c = Number(prompt("Digite o terceiro número: "))

if(a>=b && b>=c){
    alert(a+","+b+","+c)
}else if(a>=c && c>=b){
    alert(a+","+c+","+b)
}else if(b>=a && a>=c){
    alert(b+","+a+","+c)
}else if(b>=c && c>=a){
    alert(b+","+c+","+a)
}else if(c>=a && a>=b){
    alert(c+","+a+","+b)
}else{
    alert(c+","+b+","+a)
}

/*10. Turno de estudo
Faça um programa que pergunte em que turno você estuda.

Digite:

- M → Matutino
- V → Vespertino
- N → Noturno

Exiba:

- "Bom dia!"
- "Boa tarde!"
- "Boa noite!"
- "Valor inválido"
*/
let turno =prompt("Digite seu turno: M, V ou N: ").toUpperCase()

if(turno =="M"){
    alert("Bom dia!")
}else if(turno=="V"){
    alert("Boa tarde!")
}else if(turno=="N"){
    alert("Boa noite!")
}else{
    alert("Valor inválido")
}

/*11. Reajuste salarial
As organizações CSM resolveram dar um aumento de salário aos seus colaboradores.

Faça um programa que receba o salário de um colaborador e calcule o reajuste conforme a tabela:

| Faixa Salarial | Percentual |
|---------------|------------|
| Até R$ 280,00 | 20% |
| De R$ 280,01 até R$ 700,00 | 15% |
| De R$ 700,01 até R$ 1.500,00 | 10% |
| Acima de R$ 1.500,00 | 5% |

Após o reajuste, informe:

- Salário antes do reajuste;
- Percentual aplicado;
- Valor do aumento;
- Novo salário.
*/
let salario = Number(prompt("Digite seu salário: "))
let percentual 

if(salario<=280){
    percentual= 20
}else if(salario<=700){
    percentual= 15
}else if(salario<=1500){
    percentual= 10
}else{
    percentual= 5
}
let aumento = (salario*percentual)/100
let novoSalario = salario + aumento

alert("Salário antes do reajuste: R$"+salario.toFixed(2)+"\nPercentual aplicado: "+percentual+"%"+"\nValor do aumento: R$"+aumento.toFixed(2)+"\nNovo salário: R$"+novoSalario.toFixed(2))

/*12. Folha de pagamento
Faça um programa para cálculo de folha de pagamento.

O programa deverá pedir:

- Valor da hora trabalhada;
- Quantidade de horas trabalhadas no mês.

### Desconto do IR

| Salário Bruto | IR |
|--------------|----|
| Até R$ 900,00 | Isento |
| Até R$ 1.500,00 | 5% |
| Até R$ 2.500,00 | 10% |
| Acima de R$ 2.500,00 | 20% |

Considere:

- INSS: 10%
- Sindicato: 3%
- FGTS: 11% (não é descontado)

Exemplo de saída:

```text
Salário Bruto (5 * 220)     : R$ 1100,00
(-) IR (5%)                : R$   55,00
(-) INSS (10%)             : R$  110,00
FGTS (11%)                 : R$  121,00
Total de descontos         : R$  165,00
Salário Líquido            : R$  935,00
*/

