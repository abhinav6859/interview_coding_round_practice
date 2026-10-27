import portfolio from "./portfolio";
import transaction from "./transaction";

class user {
  public port: portfolio;
private Transactions:transaction[] = []
  constructor(
    public name: string,
    public readonly phone: string,
    public cash:number
  ) {
    if (typeof name !== "string" || name.trim() === "") {
      throw new Error("Invalid name");
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      throw new Error("Invalid phone");
    }
    this.port = new portfolio(cash);
  }

  buyStock(sym: string, quantity: number, price: number) {
    this.port.buyStock(sym, quantity, price);
const tran=new transaction("Buy",
  sym,
  quantity,
  price
)
    this.Transactions.push(tran)
  }
  sellStock(sym: string, quantity: number, price: number) {
    this.port.sellStock(sym, quantity, price);
    const tran=new transaction("Sell",
  sym,
  quantity,
  price
)
    this.Transactions.push(tran)
  }
  transactionHistory():transaction[]{
    return [...this.Transactions]
  }
  getHoldings() {
    return this.port.getHoldings();
  }
  currentBalance(): number {
    return this.port.currentBalance()
  }
  profitLoss(){
    return this.port.profitLoss()
  }
}
export default user;
