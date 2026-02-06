/*******************************************************************************
 *  Objetivo : Desenvolver uma aplicação para a empresa Viva Moda
 *  Autor: João Pedro
 *  Data: 04/02/2026
 *  Versão: 1.0
**********************************************************************************/
const readline = require('readline')

const entradaDeDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})


//NOME DO CLIENTE
entradaDeDados.question('Digite o nome do cliente: ', function (nome) {
    let nomeCliente = nome

    // NOME DO PRODUTO
    entradaDeDados.question('Digite o nome do produto: ', function (produto) {
        let nomeProduto = produto


        //VALOR DA COMPRA
        entradaDeDados.question('Valor da Compra: ', function (valor) {
            let valorCompra = valor

            //VALOR DO JUROS
            entradaDeDados.question('Taxa de Juros: ', function (juros) {
                let valorJuros = juros

                //Escolha de meses ou anos
                entradaDeDados.question('Você deseja pagar em anos ou meses? \nCaso for meses digite [1] se for em anos digite [2]: ', function (opcao) {
                    let OpcaoDecompra = opcao

                    //TEMPO DE PAGAMENTO
                    entradaDeDados.question('Qual o tempo de pagamento: ', function (tempo) {
                        let tempoDePagamento = tempo





                        //Transformando Valor do Juros em Porcentagem


                        //**************************CÁLCULO DO PROJETO**********************************/
                        // Fórmula: M = C * (1 + i)^n


                        //VALOR ACRÉSCIMO






                        //Validação para campo vazio
                        if (nomeCliente == '' ||
                            nomeProduto == '' ||
                            valorCompra == '' ||
                            valorJuros == '' ||
                            valorJuros == '' ||
                            tempoDePagamento == '') {

                            console.log('Existem campos obrigatórios que não foram preenchidos!!')
                        }else if(opcao != 1 && opcao != 2){
                            console.log('Número inválido')
                             
                        }


                        else if (isNaN(valor) + isNaN(juros) + isNaN(tempo)) {
                            console.log('Só é permitido a entrada de números')
                        }


                        //MESES
                        else if (opcao == 1) {
                           

                            let montante = Number(valor) * (1 + Number(juros/100)) ** Number(tempo)

                            console.log(montante)
                            console.log(valor)


                            let acrescimo = Number(montante) - Number(valor)

                            

                            console.log(`***************************** VIVA MODA *********************************
                            Muito obrigado por realizar a sua compra conosco Sr(a) ${nome}.
                            A compra do produto ${produto}, tem um valor de: ${valor}.
                            A sua compra será parcelada em ${juros} vezes e o Sr(a) pagará: ${montante.toFixed(2)}.
                            O acréscimo realizado ao valor de: ${valor} será de ${acrescimo.toFixed(2)}.
            
                            Muito obrigado por escolher a Viva Moda.`)

                        }




                        //Anos
                        else if (opcao == 2) {
                            let montante = Number(valor) * ((1 + Number(juros / 100)) ** Number(tempo * 12))

                            let acrescimo = Number(montante) - Number(valor)

                            console.log(`***************************** VIVA MODA *********************************
                Muito obrigado por realizar a sua compra conosco Sr(a) ${nome}.
                A compra do produto ${produto}, tem um valor de: ${valor}.
                A sua compra será parcelada em ${tempo*12} vezes e o Sr(a) pagará: ${montante.toFixed(2)}.
                O acréscimo realizado ao valor de: ${valor} será de ${acrescimo.toFixed(2)}.

                Muito obrigado por escolher a Viva Moda.`)


                        }


                    })
                })//Fecha o tempo
            })//Fecha o juros
        })//Fecha a compra
    })//Fecha o produto
})// Fecha o nome
