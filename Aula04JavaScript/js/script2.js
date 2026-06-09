/* Desafio Autônomo */
/*Decisão com if/else*/
let idade = Number(prompt("Digite sua idade: "))
if (idade >= 18){ 
    alert("Maior de idade"); 
} else { 
    alert("Menor de idade")
}

/*Múltiplos casos com switch*/
let numero = Number(prompt("Informe um número de 1 a 3: "));
switch(numero){
    case 1: alert("Baixo")
    break;

    case 2: alert("Médio")
    break;

    case 3: alert("Alto")
    break;
    
    default: alert("Número inválido")

}

/*Ternário*/
let numero1= Number(prompt("Informe um número: "))
let verificacao= numero1 > 0 ? "Positivo" : "Negativo"
alert(verificacao)

/*Lógica combinada*/
let idade1 = prompt("Digite sua idade: ")
let nacionalidade = prompt("Digite sua nacionalidade: ")
if( idade1>= 16 && nacionalidade.toLowerCase()==="brasileira" ){
    alert("Pode votar")
}else{
    alert("Não pode votar")
}

