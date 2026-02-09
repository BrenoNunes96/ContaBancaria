import Conta from "../../model/Conta";

 export interface ContaRepository{

//metodos crud create read uptade delete
procurarPorNumero(numero:number):void;
listarTodas():void;
cadastrar(conta:Conta):void
atualizar(conta:number):void;
deletar(numero:number):void;

//metodos bancarios
sacar(numero:number, valor:number):void
depositar(numero:number,valor:number):void
transferir(numeroOrigem:number,numeroDestino:number,valor:number):void


 }