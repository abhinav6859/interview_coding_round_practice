
// Accounts

// id
// customer
// balance
// account type: SAVINGS | CURRENT
type AccountType = "SAVINGS" | "CURRENT";
class account{

constructor(
    public readonly id : string,
    public accounttype :AccountType,
    public  balance : number,
    public customerId:string
){
if(typeof id !== "string" || id.trim() ===""){
    throw new Error ("Invalid id")
}
if(!Number.isInteger(balance) || balance<=0){
    throw new Error ("Invalid balance")
}

if(accounttype !== "SAVINGS" && accounttype !=="CURRENT"){
throw new Error("Invalid account type")
}
}

}
export default account ;