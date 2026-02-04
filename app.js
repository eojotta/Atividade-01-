/*******************************************************************************
 *  Objetivo : Desenvolver uma aplicação para a empresa Viva Moda
 *  Autor: João Pedro
 *  Data: 04/02/2026
 *  Versão: 1.0
**********************************************************************************/
const readline = require('readline')

const entradaDeDados = readline.createInterface({

    input:process.stdin,
    output:process.stdout
})


//NOME DO CLIENTE
entradaDeDados.question('Digite o nome do cliente: ', function(nome){
    let nomeCliente = nome

    // NOME DO PRODUTO
entradaDeDados.question('Digite o nome do produto: ',function(produto){
    let nomeProduto = produto


    //VALOR DA COMPRA
entradaDeDados.question('Valor da Compra: ',function(valor){
    let valorCompra = valor

    //VALOR DO JUROS
entradaDeDados.question('Taxa de Juros: ',function(juros){
    let valorJuros = juros
    
    //TEMPO DE PAGAMENTO
entradaDeDados.question('Qual o tempo de pagamento: ',function(tempo){
    let tempoDePagamento = tempo

    //Transformando Valor do Juros em Porcentagem
    let jurosReal = valorJuros/100

    //**************************CÁLCULO DO PROJETO**********************************/
    // Fórmula: M = C * (1 + i)^n

    let montante = Number(valor) * (1 + Number(jurosReal)) ** Number(tempo)
    
    //FAZER A TABELA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // VOCE PAROU NA PARTE DA TABELA !!!!!!!!!!!!!!!!!!!


    //Validação para campo vazio
    if(nomeCliente == '' ||
         nomeProduto == '' ||
          valorCompra == '' ||
           valorJuros == '' ||
            valorJuros == '' ||
             tempoDePagamento == ''){

                console.log('Existem campos obrigatórios que não foram preenchidos!!')
    }
    
                })//Fecha o tempo
            })//Fecha o juros
        })//Fecha a compra
    })//Fecha o produto
})// Fecha o nome
