console.log("Seja  bem vindo")
/*
Variaveis
var - variavel global legada - antiga
let - variaveis que mudam de valor
const - variaveis que não mudam de valor
typeof - retorna qual o tipo de variavel
*/
/*
let num1 = 10
let num2 = 10.5
let num3 = "Gilmar"
let verdade = true
let numero
let numero2
console.log(typeof num1)
console.log(typeof num2)
console.log (typeof nome)
console.log(typeof verdade)
console.log(typeof nome)
console.log(typeof numero)
console.log(typeof numero2)
*/
//Conversão de tipos de dados
/*
let num1 = Number(prompt("Escreva o primeiro numero"))
let num2 = Number(prompt("Digite o segundo numero"))
let soma = num1 + num2
console.log(soma)

let texto = String(soma)
console.log(typeof texto)
*/
/*
//Operadores matemáticos
+ soma
- subtração
* Multiplicação
/ Divisão
% Mod ou resto da divisão
** Potenciação
*/
/*
let num1 = 10
let num2 = 5

let soma = num1 + num2
let sub = num1 - num2
let multiplicação = num1 * num2
let div = num1 / num2
let porcentagem =  num1*(num2/100)
let exp = num1 ** num2
let rest = num1 % num2

console.log(soma,sub,multiplicação,div,porcentagem,exp,rest)
*/
/*
Operadores Relacionais
== igual
=== extritamente igual
!= diferente
> maior
< menor
>= maior igual
<= menor igual
*/
/*
let dia = 2
switch(dia){
    case 1:
    console.log("Domingo")
    break
    case 2:
    console.log("Segunda")
    break
    default: console.log("Entrada invalida")

}

*/
/*
//Laços de repetição
podem ser
for(para) = quanto voce sabe quantas vezes repete

while(enquanto) = só sair do loop quando atender uma condição

do while = entre no loop pelo menos uma vez
*/
/*
for (let i = 0; i <=5; i++){
    console.log("O valor de i é : " + i)
}
let condicao = 0

while(condicao <=5){
    console.log("Contagem progressiva: "  + condicao)
    condicao++
}
let numero = 5
do{
    console.log(numero)
    numero--

}while(numero >= 0)
*/
// Função Simples função
/*
função ela pode retornar um valor ou nao pode ser função direta ou função com retorno * sempre uma função tem que abrir e fechar parenteses para a função ser executada sempre voce deve chamar ela
*/
/*
function saudacao(){
    console.log("O resultado da soma é : ")

} 
saudacao()

// função com retorno(ARGUMENTOS / PARAMETROS)

function resto (num1,num2){
    let resto = num1 % num2
    return console.log(resto)
}
resto(10,4)
*/
//Arrays
//Arrays sao listas ou estruturas que armazena diversos valores em uma variavel organizadas por posição de indicies//
//Exemplo
let frutas  = ["Maça","Banana","Laranja"]

//frutas [0] = Maça //
//frutas [1] = Banana//
//frutas [2] = Laranja//
//frutas [3] = Pera//

console.log(frutas)
console.log(frutas.length)

//push() adiciona
//pop() remove o final
//shift() remove o inicio
// unshift() adiciona no inicio
// length -  (faz a contagem do tamanho do array)

//Exemplos
//frutas.push('Morango')
//console.log(frutas)

// let aluno = {
nome: Gilmar}