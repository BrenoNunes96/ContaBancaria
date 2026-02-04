import leia from "readline-sync"

export class ContaBancaria{
private _numero : number
private _titulo :string
private _agencia :number
private _tipo : number
private _saldo: number
    
constructor(numero:number,titulo:string,  agencia:number,tipo:number,saldo:number  ){

this._numero = numero
this._titulo = titulo
this._agencia = agencia
this._saldo = saldo
this._tipo = tipo
 
}


}