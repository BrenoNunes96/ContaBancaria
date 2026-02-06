import leia from "readline-sync"

export default abstract class Conta{
private _numero : number;
private _agencia :number;
private _titular :string;
private _tipo : number;
private _saldo :number;
  

    

constructor(numero:number,agencia:number,titular:string,tipo:number,saldo:number  ){

this._numero = numero;

this._agencia = agencia;
this._titular = titular;
this._saldo = saldo;
this._tipo = tipo;
 
}

  /**

     * @return {number}
     */
	public get numero(): number {
		return this._numero;
	}

    /**
     * Getter titulo
     * @return {string}
     */
	public get titular(): string {
		return this._titular;
	}

    /**
     * Getter agencia
     * @return {number}
     */
	public get agencia(): number {
		return this._agencia;
	}

    /**
     * Getter tipo
     * @return {number}
     */
	public get tipo(): number {
		return this._tipo;
	}

    /**
     * Getter saldo
     * @return {number}
     */
	public get saldo(): number {
		return this._saldo;
	}

    /**
     * Setter numero
     * @param {number} value
     */
	public set numero(value: number) {
		this._numero = value;
	}

    /**
     * Setter titulo
     * @param {string} value
     */
	public set titular(value: string) {
		this._titular = value;
	}

    /**
     * Setter agencia
     * @param {number} value
     */
	public set agencia(value: number) {
		this._agencia = value;
	}

    /**
     * Setter tipo
     * @param {number} value
     */
	public set tipo(value: number) {
		this._tipo = value;
	}

    /**
     * Setter saldo
     * @param {number} value
     */
	public set saldo(value: number) {
		this._saldo = value;
	}

public depositar(value:number):void{
  if(value<=0){
     console.log("valor deve ser acima de zero")
  }
  else{
     this._saldo +=value;
     console.log('foi depositado')
  }

}




public sacar (value:number):boolean{
     if(value>this._saldo){
               console.log("saldo insuficiente");
               return false
     }
     this._saldo -= value;
     return true;
}


     public visualizar():void{
          let tipo : string 

switch(this._tipo){
case 1:
          tipo = 'conta Corrente'
          break
case 2:
     tipo = 'conta Poupança'
  break
 default:
tipo = 'invalido'
     break

}

console.log(`\n**********************************************`)
console.log(`DADOS DA CONTA`)
console.log(`**********************************************`)
console.log(`Numero da conta ${this._numero}`)
console.log(`Numero da agência ${this._agencia}`)
console.log(`Nome do titular ${this._titular}`)
console.log(`tipo da conta ${tipo}`)
console.log(`saldo ${this._saldo.toFixed(2)}`)
     }

}




