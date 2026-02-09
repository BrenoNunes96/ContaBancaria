import Conta from "../model/Conta"

import { ContaRepository } from './../util/repository/ContaRepository';
import { Input } from "../util/inputs"

export default class contaController implements ContaRepository{
    private listaContas = new Array<Conta>()

    public numero :number = 0 


    listarTodas(): void{
        for(let x of this.listaContas){         // lista todas as contaws q esta na colection listaContas
          x.visualizar()
        }

    }

    cadastrar(conta: Conta): void{
this.listaContas.push(conta)
console.log(`a conta foi cadastrada do numero ${conta.numero} foi  cadastrada com sucesso`)
    }


    atualizar(y:number): void{   

        if(!this.buscaConta(y)){
      return console.log("nao tem esse numero de agencia")

        }
let x = this.buscaConta(y)
if(x){
    

    let z = Input.questionInt("qual numero novo da agencia")
    
     x.agencia = z

     console.log(`FOI ATUALIZADO numero agencia ${x.agencia}`)
     let z1 = Input.question("qual novo nome ?")
     x.titular = z1
        console.log(`atualizado nome titular ${x.titular}`)


}

}


    




    deletar(numero: number): void{

        const buscaconta = this.buscaConta(numero)
        if(buscaconta !== null){
this.listaContas.splice(this.listaContas.indexOf(buscaconta),1)

        }
        else{
            console.log("conta nao encontrada")
        }

    }


    

procurarPorNumero(x:number):void{
const buscarconta =this.buscaConta(x);
 this.buscaConta(x)
if(buscarconta !== null ){
    buscarconta.visualizar()
}
    else{
        console.log('conta nao encontrada')
    }
}

    public buscaConta(numero:number):Conta | null{

        for(let x of this.listaContas){
            if(x.numero === numero){
                return x
            } 
        }

         return null
    }










    sacar(numero: number, valor: number): void{

    const conta = this.buscaConta(numero)

    if(conta !== null){
     conta.sacar(valor)

    }


    }
    depositar(numero: number, valor: number): void{
        const conta = this.buscaConta(numero)
        if(conta !== null)[
      conta.depositar(valor)

        ]

    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void{
       const conta1 = this.buscaConta(numeroOrigem)
        const conta2 = this.buscaConta(numeroDestino)
        
      if(conta1 !== null && conta2 !== null){
     
          if( conta1.sacar(valor)){

          conta2.depositar(valor)
           }
        }
    }


    public gerarNumero():number {   // a cada numero inserido vai somar e ir para variavel numero
        return ++ this.numero
    }



}