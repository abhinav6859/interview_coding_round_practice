class portfolio{
   //  public readonly id : string=crypto.randomUUID()
    constructor(
     public userid :string,
     public balance:number

    ){
if(!Number.isFinite(balance) || balance<=0 ){
  throw new Error("Invalid balance")
}
    }
}