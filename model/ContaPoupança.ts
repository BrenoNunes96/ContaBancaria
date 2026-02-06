import conta from "./Conta"
export class ContaPoupança extends conta{
private _aniversario:number;



constructor(numero:number,agencia:number,titular:string,tipo:number,saldo:number,aniversario:number){
    super(numero,agencia,titular,tipo,saldo)
    this._aniversario = aniversario;

}

public visualizar ():void{
super.visualizar()
console.log(`aniversario é : ${this._aniversario}`)


}
public sacar(value :number):boolean{
if(value > this.saldo){
    console.log("saldo insuficiente")
    return false
}

this.saldo -= value
return true

}

    /**
     * Getter aniversario
     * @return {number}
     */
	public get aniversario(): number {
		return this._aniversario;
	}

    /**
     * Setter aniversario
     * @param {number} value
     */
	public set aniversario(value: number) {
		this._aniversario = value;
	}



}