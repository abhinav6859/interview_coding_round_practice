import portfolioholding from "./portfolioholding";
class portfolio {
  private PandL=0;
  private portfolioholdings = new Map<string, portfolioholding>();
  //  public readonly id : string=crypto.randomUUID()
  constructor(private balance: number) {
    if (!Number.isFinite(balance) || balance <= 0) {
      throw new Error("Invalid balance");
    }
  
  }
     currentBalance(){
 return this.balance;
    }
  buyStock(sym: string, quantity: number, price: number) {
    if (this.balance < price * quantity) {
      throw new Error("Insufficient balance");
    }
    let prev_price;
    const prev_holding = this.portfolioholdings.get(sym);

    let prev_quantity;

    this.balance -= price * quantity;

    prev_price = 0;
    prev_quantity = 0;

    if (prev_holding === undefined) {
      const holding = new portfolioholding(sym, quantity, price);

      this.portfolioholdings.set(sym, holding);
    } else {
      prev_price = prev_holding.average_price;
      prev_quantity = prev_holding.quantity;
      const avg_price =
        prev_price * prev_quantity +
        (price * quantity) / (prev_quantity + quantity);
      prev_holding.quantity += quantity;
      prev_holding.average_price = avg_price;
    }
  }
  sellStock(sym: string, quantity: number, price: number) {
    const holding = this.portfolioholdings.get(sym);
    if (holding === undefined) {
      throw new Error("Insufficient stock");
    }
    if (holding.quantity < quantity) {
      throw new Error("less stock than now");
    }
    holding.quantity -= quantity;
    this.balance += price * quantity;
 const A = this.portfolioholdings.get(sym)
 
    this.PandL+=quantity*(price-holding.average_price)

  }
  profitLoss(){
    return this.PandL
  }
  getHoldings() {
    return [...this.portfolioholdings.values()];
  }
}
export default portfolio;
