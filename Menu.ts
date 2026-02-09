
import { contaCorrente } from './src/model/ContaCorrente';
import { Input } from "./src/util/inputs";
import {colors} from "./src/util/Colors"
import contaController from './src/controller/contaController';

import { ContaPoupança } from './src/model/ContaPoupança';

import Conta from './src/model/Conta';


const contaControllers = new contaController()
export function main (){  

  let c3 = new ContaPoupança(2,323242,'julia',1,4214,3242342)



    while(true){
        console.log(colors.bg.black, colors.fg.yellow,"*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************",colors.reset);
console.log(colors.bg.black, colors.fg.red,'digite uma opçao',colors.reset)
let opcao : number= Input.questionInt('')

if(opcao === 9){
 console.log(colors.bg.black, colors.fg.yellow,"\n\nBanco do Brazil com Z - O seu Futuro começa aqui!",colors.reset)

    Sobre()
    console.log('')
    process.exit(9)
}

 switch(opcao){
case 1:
    console.log('\n\nCriar Conta\n\n')
    criarConta()
    keyPress()
break
case 2:
    console.log('\n\nListar todas as Contas\n\n')
    listarContas()
     keyPress()
    break
case 3:
    console.log("\n\n Buscas Conta por Numero \n\n")


     keyPress()
    break
case 4:
    console.log("\n\n atualizar Dados da Conta   \n\n")
 let y = Input.questionInt('qual numero da conta vai att ?')
atualizar(y)

     keyPress()
   break
case 5:
    console.log("\n\n  Apagar Conta     \n\n")
     keyPress()
    let n =  Input.questionInt("digite o numero da conta a ser apagada")
     deletar(n)
      keyPress()

   break
   case 6:
    console.log("\n\n Sacar\n\n")
    contaControllers.sacar(0,421)
     keyPress()
    break
case 7:
       console.log("\n\n Depositar\n\n")
        keyPress()
    break
case 8:
       console.log("\n\n Transferir valores entre Contas \n\n")
        keyPress()
    break
case 9:
       console.log("\n\n Sair\n\n")
       keyPress()
    break
default:
        console.log("invalido")
break
        }
    }
}

const listarContas = ()=>{

let listagem = contaControllers.listarTodas()
console.log(listagem)

}


 const criarConta = ()=>{
    
let tipoContas = ['conta corrente','conta poupança']

   console.log('digite o numero da agencia')
    const agencia = Input.questionInt("")

       console.log('digite o nome do titular')
       const titular = Input.question("")
       
          console.log('digite o tipo da conta ')
  const tipo = Input.keyInSelect(tipoContas,"",{cancel:false})+1   

       const saldo = Input.questionFloat("digite o saldo")

   switch(tipo){
    case 1:    
      const limite= Input.questionInt("digite o limite da conta") 
      contaControllers.cadastrar(new contaCorrente(contaControllers.gerarNumero(),agencia,titular,tipo,saldo,limite)) 
      console.log("conta cadastrada")
       
         break
case 2: // conta poupança

console.log("digite o dia do seu aniverario")
const aniversario = Input.questionInt("")
contaControllers.cadastrar(new ContaPoupança(contaControllers.gerarNumero(),agencia,titular,tipo,saldo,aniversario,)  )
console.log('conta cadastrada poupança')
break

default :
console.log('invalido')

   }
            
        
 }


 function buscarcontaPorNumero () :void {
let numeros = Input.questionInt('numero da conta')

    contaControllers.procurarPorNumero(numeros)
 }

const atualizar = (num:number):void =>{
const conta  = contaControllers.atualizar(num)




}




const deletar = (n : number): void =>{

contaControllers.deletar(n)


}


export function Sobre():void{

         console.log(colors.bg.black, colors.fg.yellow,"\n*****************************************************");
    console.log("Projeto Desenvolvido por: Breno Nunes de Almeida");
    console.log("Generation Brasil - brenogenerationa@generation.org");
    console.log("github.com/BrenoNunes96");
    console.log("*****************************************************"),colors.reset

            }


  export  function keyPress():void {
console.log('aperte enter')
Input.prompt()

    }        
      main()

      function criarContasTeste(): void{
   
    // Instâncias da Classe ContaCorrente
    contaControllers.cadastrar(new  contaCorrente(contaControllers.gerarNumero(), 1234, 'Amanda Magro', 1, 1000000.00, 100000.00));
    contaControllers.cadastrar(new contaCorrente(contaControllers.gerarNumero(), 4578, 'João da Silva', 1,  1000.00, 100.00));
 
    // Instâncias da Classe ContaPoupança
    contaControllers.cadastrar(new ContaPoupança(contaControllers.gerarNumero(), 5789, "Geana Almeida", 2, 10000, 10));
    contaControllers.cadastrar(new ContaPoupança(contaControllers.gerarNumero(), 5698, "Jean Lima", 2, 15000, 15));
 
}
 