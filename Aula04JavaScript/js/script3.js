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
- Qualquer outra letra → Sexo inválido
*/
let sexo = prompt("Digite F ou M, de acordo com seu sexo:").toUpperCase()
if(sexo === "F"){
    alert("Feminino")
}else if(sexo ==="M"){
    alert("Masculino")
}else{
    alert("Sexo inválido")
}

/*4. Vogal ou consoante
Faça um programa que verifique se uma letra digitada é vogal ou consoante.
*/
let letra = prompt("Digite uma letra: ").toLowerCase()
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
- **Reprovado**, se a média for menor que 7.
*/
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

/*
12. Folha de pagamento

Faça um programa para cálculo de folha de pagamento.

O programa deverá pedir:
- Valor da hora trabalhada;
- Quantidade de horas trabalhadas no mês.

Desconto do IR:
Até R$ 900,00 -> Isento
Até R$ 1.500,00 -> 5%
Até R$ 2.500,00 -> 10%
Acima de R$ 2.500,00 -> 20%

Considere:
- INSS: 10%
- Sindicato: 3%
- FGTS: 11% (não é descontado)
*/

let valorHora = Number(prompt("Digite o valor da hora:"));
let horas = Number(prompt("Digite as horas trabalhadas:"));

let salarioBruto = valorHora * horas;
let percentualIR;

if (salarioBruto <= 900) {
    percentualIR = 0;
} else if (salarioBruto <= 1500) {
    percentualIR = 5;
} else if (salarioBruto <= 2500) {
    percentualIR = 10;
} else {
    percentualIR = 20;
}

let ir = salarioBruto * percentualIR / 100;
let inss = salarioBruto * 10 / 100;
let sindicato = salarioBruto * 3 / 100;
let fgts = salarioBruto * 11 / 100;

let descontos = ir + inss + sindicato;
let salarioLiquido = salarioBruto - descontos;

alert(
"Salário Bruto: R$ " + salarioBruto +
"\nIR: R$ " + ir +
"\nINSS: R$ " + inss +
"\nSindicato: R$ " + sindicato +
"\nFGTS: R$ " + fgts +
"\nTotal de descontos: R$ " + descontos +
"\nSalário Líquido: R$ " + salarioLiquido
);

/*
13. Dia da semana

1 = Domingo
2 = Segunda
3 = Terça
4 = Quarta
5 = Quinta
6 = Sexta
7 = Sábado

Caso seja digitado outro valor, exiba:
Valor inválido
*/

let dia = Number(prompt("Digite um número de 1 a 7:"));

if (dia == 1) {
    alert("Domingo");
} else if (dia == 2) {
    alert("Segunda-feira");
} else if (dia == 3) {
    alert("Terça-feira");
} else if (dia == 4) {
    alert("Quarta-feira");
} else if (dia == 5) {
    alert("Quinta-feira");
} else if (dia == 6) {
    alert("Sexta-feira");
} else if (dia == 7) {
    alert("Sábado");
} else {
    alert("Valor inválido");
}

/*
14. Conceito por média

9,0 a 10,0 -> A
7,5 a 9,0 -> B
6,0 a 7,5 -> C
4,0 a 6,0 -> D
0 a 4,0 -> E

A, B ou C -> APROVADO
D ou E -> REPROVADO
*/

let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));

let media = (nota1 + nota2) / 2;
let conceito;

if (media >= 9) {
    conceito = "A";
} else if (media >= 7.5) {
    conceito = "B";
} else if (media >= 6) {
    conceito = "C";
} else if (media >= 4) {
    conceito = "D";
} else {
    conceito = "E";
}

if (conceito == "A" || conceito == "B" || conceito == "C") {
    alert("Média: " + media + "\nConceito: " + conceito + "\nAPROVADO");
} else {
    alert("Média: " + media + "\nConceito: " + conceito + "\nREPROVADO");
}

/*
15. Tipos de triângulo

Verifique se os lados podem formar um triângulo.

Se formarem, informe se é:
- Equilátero
- Isósceles
- Escaleno
*/

let lado1 = Number(prompt("Digite o primeiro lado:"));
let lado2 = Number(prompt("Digite o segundo lado:"));
let lado3 = Number(prompt("Digite o terceiro lado:"));

if (
    lado1 + lado2 > lado3 &&
    lado1 + lado3 > lado2 &&
    lado2 + lado3 > lado1
) {

    if (lado1 == lado2 && lado2 == lado3) {
        alert("Triângulo Equilátero");
    } else if (
        lado1 == lado2 ||
        lado1 == lado3 ||
        lado2 == lado3
    ) {
        alert("Triângulo Isósceles");
    } else {
        alert("Triângulo Escaleno");
    }

} else {
    alert("Não forma um triângulo");
}

/*
16. Equação do segundo grau

ax² + bx + c = 0

- Se a = 0, a equação não é de segundo grau.
- Se Δ < 0, não possui raízes reais.
- Se Δ = 0, possui apenas uma raiz real.
- Se Δ > 0, possui duas raízes reais.
*/

let a = Number(prompt("Digite o valor de a:"));
let b = Number(prompt("Digite o valor de b:"));
let c = Number(prompt("Digite o valor de c:"));

if (a == 0) {

    alert("Não é uma equação do segundo grau");

} else {

    let delta = b * b - 4 * a * c;

    if (delta < 0) {

        alert("Não possui raízes reais");

    } else if (delta == 0) {

        let x = -b / (2 * a);

        alert("Raiz única: " + x);

    } else {

        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);

        alert("x1 = " + x1 + "\nx2 = " + x2);
    }
}

/*
17. Ano bissexto

Faça um programa que leia um ano e informe
se ele é ou não bissexto.
*/

let ano = Number(prompt("Digite um ano:"));

if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
    alert("Ano bissexto");
} else {
    alert("Ano não bissexto");
}

/*
18. Par ou ímpar

Faça um programa que leia um número inteiro
e determine se ele é par ou ímpar.
*/

let numero = Number(prompt("Digite um número inteiro:"));

if (numero % 2 == 0) {
    alert("Par");
} else {
    alert("Ímpar");
}

/*
19. Características de um número

Indicar se o número é:
- Par ou ímpar
- Positivo ou negativo
*/

let numero2 = Number(prompt("Digite um número:"));

let paridade;
let sinal;

if (numero2 % 2 == 0) {
    paridade = "Par";
} else {
    paridade = "Ímpar";
}

if (numero2 >= 0) {
    sinal = "Positivo";
} else {
    sinal = "Negativo";
}

alert("O número é " + paridade + " e " + sinal);

/*
20. Investigação criminal

1. Telefonou para a vítima?
2. Esteve no local do crime?
3. Mora perto da vítima?
4. Devia para a vítima?
5. Já trabalhou com a vítima?

2 respostas positivas -> Suspeita
3 ou 4 -> Cúmplice
5 -> Assassino
Caso contrário -> Inocente
*/

let pontos = 0;

let p1 = prompt("Telefonou para a vítima? (S/N)");
let p2 = prompt("Esteve no local do crime? (S/N)");
let p3 = prompt("Mora perto da vítima? (S/N)");
let p4 = prompt("Devia para a vítima? (S/N)");
let p5 = prompt("Já trabalhou com a vítima? (S/N)");

if (p1 == "S" || p1 == "s") pontos++;
if (p2 == "S" || p2 == "s") pontos++;
if (p3 == "S" || p3 == "s") pontos++;
if (p4 == "S" || p4 == "s") pontos++;
if (p5 == "S" || p5 == "s") pontos++;

if (pontos == 2) {
    alert("Suspeita");
} else if (pontos == 3 || pontos == 4) {
    alert("Cúmplice");
} else if (pontos == 5) {
    alert("Assassino");
} else {
    alert("Inocente");
}

/*
21. Maior e menor entre dois números
*/

let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));

if (n1 > n2) {
    alert("Maior: " + n1 + "\nMenor: " + n2);
} else {
    alert("Maior: " + n2 + "\nMenor: " + n1);
}

/*
22. Maior e menor entre três inteiros
*/

let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));
let num3 = Number(prompt("Digite o terceiro número:"));

let maior = num1;
let menor = num1;

if (num2 > maior) maior = num2;
if (num3 > maior) maior = num3;

if (num2 < menor) menor = num2;
if (num3 < menor) menor = num3;

alert("Maior: " + maior + "\nMenor: " + menor);

/*
23. Par ou ímpar

Utilize o operador %
*/

let valor = Number(prompt("Digite um número inteiro:"));

if (valor % 2 == 0) {
    alert("Par");
} else {
    alert("Ímpar");
}

/*
24. Circunferência

Mostrar:
- Diâmetro
- Comprimento
- Área
*/

let raio = Number(prompt("Digite o raio:"));

let diametro = raio * 2;
let comprimento = 2 * 3.14 * raio;
let area = 3.14 * raio * raio;

alert(
"Diâmetro: " + diametro +
"\nComprimento: " + comprimento +
"\nÁrea: " + area
);

/*
25. Doação de sangue

Pode doar se tiver entre 18 e 67 anos.
*/

let idade = Number(prompt("Digite sua idade:"));

if (idade >= 18 && idade <= 67) {
    alert("Pode doar sangue");
} else {
    alert("Não pode doar sangue");
}

/*
26. Validação de data

Pergunte:
- Dia
- Mês
- Ano

Considere:
- Todos os meses possuem 31 dias
- Ano atual é 2013
*/

let diaData = Number(prompt("Digite o dia:"));
let mes = Number(prompt("Digite o mês:"));
let anoData = Number(prompt("Digite o ano:"));

if (anoData > 2013) {
    alert("Ano inválido");
} else if (mes < 1 || mes > 12) {
    alert("Mês inválido");
} else if (diaData < 1 || diaData > 31) {
    alert("Dia inválido");
} else {
    alert("Data válida");
}

/*
27. Troca de valores

Leia x e y.
Mostre os valores.
Troque os valores.
Mostre novamente.
*/

let x = Number(prompt("Digite x:"));
let y = Number(prompt("Digite y:"));

alert("Antes:\nx = " + x + "\ny = " + y);

x = x + y;
y = x - y;
x = x - y;

alert("Depois:\nx = " + x + "\ny = " + y);