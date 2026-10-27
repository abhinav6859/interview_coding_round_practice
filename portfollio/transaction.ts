type tran ="Buy" | "Sell"
class transaction{
    
    constructor(
        public tran:tran,
        public stock_sym:string,
        public quantity :number,
        public price:number
    ){ 

if(typeof stock_sym!=="string" || stock_sym.trim()===""){
    throw new Error("Invalid stock_sym")
}
if(!Number.isInteger(quantity) || quantity<=0 ){
  throw new Error("Invalid quantity")
}
 if (tran !== "Buy" && tran !== "Sell") {
      throw new Error("Invalid money type");
    }
    if(!Number.isFinite(price) || price<=0 ){
  throw new Error("Invalid price")
}
    }
    
}
export default transaction;