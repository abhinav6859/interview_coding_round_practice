// Create a Stock model with symbol, name, and price.

class stock{
constructor(
    public readonly sym:string,
    public readonly name:string,
    public price : number
){
if(typeof(sym)!=="string" || sym.trim()===""){
    throw new Error("Invalid sym")
}
if(typeof(name)!=="string" || name.trim()===""){
    throw new Error("Invalid name")
}
if(!Number.isFinite(price) || price<=0 ){
  throw new Error("Invalid price")
}
}
}