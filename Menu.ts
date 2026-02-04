




import leia = require('readline-sync');
import {colors} from "./src/util/Colors"
import Conta from "./model/Conta"; // importa o classe conta do arquivo conta
export function main (){
    const c2 = new Conta(1,234,'breno',2,31231)
  console.log(  c2.visualizar())
const c1 = new Conta(leia.questionInt("digite sua conta"),leia.questionInt("digite sua agencia"),leia.question("digite seu nome"),leia.questionInt("digite o tipo da sua conta"),leia.questionInt("digite o saldo")) // variavel C1 que cria uma novo OBJETO da CLASSE Conta
c1.sacar(2000.00)
console.log(c1.visualizar())
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
console.log(colors.bg.black, colors.fg.yellow,'digite uma opçao',colors.reset)
let opcao : number= leia.questionInt('')

if(opcao === 0){
 console.log(colors.bg.black, colors.fg.yellow,"\n\nBanco do Brazil com Z - O seu Futuro começa aqui!",colors.reset)

    Sobre()
    console.log(colors.reset,'')
    process.exit(0)
}

        switch(opcao){
case 1:
    console.log('\n\nCriar Contaz\n\n')
    break
case 2:
    console.log('\n\nListar todas as Contas\n\n')
    break
case 3:
    console.log("\n\n Buscas Conta por Numero \n\n")
    break
case 4:
    console.log("\n\n tualizar Dados da Conta   \n\n")
   break
case 5:
    console.log("\n\n  Apagar Conta     \n\n")

   break
   case 6:
    console.log("\n\n Sacar\n\n")
    break
case 7:
       console.log("\n\n Depositar\n\n")
    break
case 8:
       console.log("\n\n Transferir valores entre Contas \n\n")
    break
case 9:
       console.log("\n\n Sair\n\n")
      
    break
default:
        console.log("invalido")

        }


}}
  
            export function Sobre():void{

         console.log(colors.bg.black, colors.fg.yellow,"\n*****************************************************");
    console.log("Projeto Desenvolvido por: Breno Nunes de Almeida");
    console.log("Generation Brasil - brenogenerationa@generation.org");
    console.log("github.com/BrenoNunes96");
    console.log("*****************************************************"),colors.reset

            }
      main()