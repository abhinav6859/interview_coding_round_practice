class Stock{
    
    constructor
      (  public sym:string,
        public name : string,
        public price :number 
        
      )
      {
     if (typeof sym !=="string" || sym.trim()===""){
        throw new Error (`Invalid sum : ${sym}`)
      } 
      if(typeof(name)!=="string" || name.trim()===""){
    throw new Error("Invalid name")
}
if(!Number.isFinite(price) || price<=0 ){
  throw new Error("Invalid price")
} 
    
}
}
export default Stock;