class portfolioholding{
     constructor(
     public userid :string,
     public stockid:string,
     public quantity:number,
     public average_price:number

    ){

if(!Number.isSafeInteger(quantity) || quantity<=0 ){
  throw new Error("Invalid quantity")
}
if(!Number.isFinite(average_price) || average_price<=0 ){
  throw new Error("Invalid average_price")
}
    }
}