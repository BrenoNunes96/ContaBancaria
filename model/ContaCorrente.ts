import conta from "../model/Conta"


export class contaCorrente extends conta{
private _limite : number;


constructor(numero:number,agencia:number,titular:string,tipo:number,saldo:number,limite:number){
super(numero,agencia,titular,tipo,saldo)
this._limite = limite;
}


public sacar(value :number):boolean{

if(value > (this.saldo + this._limite)){
    console.log('saldo insuficiente')
return false
}
this.saldo -= value
return true}


    // chama o metodo visualizar da class Conta e adiciona o limite
public visualizar ():void{
super.visualizar()
console.log(`limite da conta ${this._limite}`)


}


/**
     * Getter limite
     * @return {number}
     */
	public get limite(): number {
		return this._limite;
	}

    /**
     * Setter limite
     * @param {number} value
     */
	public set limite(value: number) {
		this._limite = value;
	}


}