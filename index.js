// exercicio interpretação de codigo 1
//a. vai aparecer 10 e 50 pois ele fez a variave multiplicado por 5
//b. ele vai ignorar pois não executa no console

// exercicio2
//a. essa função faz retornar somente se o usuario colocou cenoura na frase 
//b. I- vai aparecer true pois aparece cenoura na frase
//   II- vai aparecer true pois ele primeiro deixa tudo minusculo depois depois inclui cenoura
//   III- aparece true pois aparece cenouras 

//exercicio 1 codigo de escrita
/*a. 

    function minhaFuncao1() {
        const nomeUsuario = prompt("Qual seu nome? ")
        const idadeUsuario = prompt("Qual sua idade? ")
        const cidadeUsuario = prompt("Onde vc mora? ")
        const ocupacaoUsuario = prompt("O que faz da vida? ")
        console.log(`Eu sou ${nomeUsuario}, tenho ${idadeUsuario} anos, moro em ${cidadeUsuario} e sou ${ocupacaoUsuario}.`)
    }
    
    minhaFuncao1()*/

    /*b. 

    function minhaFuncao2(nomeUsuario, idadeUsuario, cidadeUsuario, profissaoUsuario) {
    const fraseUsuario = (`Eu sou ${nomeUsuario}, tenho ${idadeUsuario} anos, moro em ${cidadeUsuario} e sou ${profissaoUsuario}.`)
        return fraseUsuario 
    }
    
    const resultado = minhaFuncao2("Luiz", "39", "São Leopoldo", "estudante")
    console.log(resultado)*/
    
//exercicio 2 codigo de escrita
/*a. 
function calcularSoma(a, b) {
    const soma = a + b
	return soma
}

 const resultado = calcularSoma(5, 8)
console.log(resultado)*/

/*b. 
function minhaFuncao1(a, b) {
    const pergunta = a > b
	return pergunta
}

 const resposta = minhaFuncao1(9, 13)
console.log(resposta)*/

/*c. 
function minhaFuncao1(a) {
    const pergunta = a % 2 === 0
	return pergunta
}

 const resposta = minhaFuncao1(12)
console.log(resposta)*/

/*d.
function minhaFuncao1(a) {
    const fraseMaiuscula = a.toUpperCase()
    console.log(fraseMaiuscula)
    console.log(a.length)
    
}

   minhaFuncao1("Olá, como vai vc?")*/

/*exercicio 3    

function funcaoSoma(a, b) {
    const soma = Number(a) + Number(b)
    return soma
}
function funcaoSubtracao(a, b) {
    const subtracao = a - b
    return subtracao
}
function funcaoMultiplicacao(a, b) {
    const multiplicacao = a * b
    return multiplicacao
}
function funcaoDivisao(a, b) {
    const Divisao = a / b
    return Divisao
}
let numeroA = prompt("Diga um numero:")
let numeroB = prompt("Diga outro numero:")
const soma = funcaoSoma (numeroA, numeroB)
const subtracao = funcaoSubtracao(numeroA,numeroB)
const multiplicacao = funcaoMultiplicacao(numeroA, numeroB)
const divisao = funcaoDivisao(numeroA, numeroB)

console.log(`Numeros inseridos: ${numeroA} e ${numeroB}`)
console.log(`Soma: ${soma}`)
console.log(`Diferenca: ${subtracao}`)
console.log(`Multiplicacao: ${multiplicacao}`)
console.log(`Divisao: ${divisao}`)*/









