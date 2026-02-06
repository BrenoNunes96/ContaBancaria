import { contaCorrente } from './model/ContaCorrente';




import { Input } from "./src/util/inputs";
import {colors} from "./src/util/Colors"

import { ContaPoupança } from './model/ContaPoupança';
export function main (){
   
  
  let c3 = new ContaPoupança(2,323242,'julia',1,4214,3242342)

  c3.visualizar()
c3.sacar(4000)
  c3.visualizar()
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
    keyPress()
break
case 2:
    console.log('\n\nListar todas as Contas\n\n')
     keyPress()
    break
case 3:
    console.log("\n\n Buscas Conta por Numero \n\n")
     keyPress()
    break
case 4:
    console.log("\n\n atualizar Dados da Conta   \n\n")
     keyPress()
   break
case 5:
    console.log("\n\n  Apagar Conta     \n\n")
     keyPress()

   break
   case 6:
    console.log("\n\n Sacar\n\n")
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