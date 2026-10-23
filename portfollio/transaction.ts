type tran ="Buy" | "Sell"
class histry{
    constructor(
        public tran:tran,
        public stock_sym:"string",
        public quantity :number
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
    }
    
}