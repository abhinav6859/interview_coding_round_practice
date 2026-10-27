import Stock from "./stock";

import User from "./user";

class system {
  private stocks = new Map<string, Stock>();
  private users = new Map<string, User>();

  addstock(sym: string, name: string, price: number) {
    const stock = new Stock(sym, name, price);
    this.stocks.set(sym, stock);
  }
  addUser(name: string, phone: string,cash:number) {
    const user: User = new User(name, phone,cash);
    this.users.set(phone, user);
  }
  buyStock(userid: string, sym: string, quantity: number, price: number) {
    if (!this.stocks.get(sym)) {
      throw new Error(`stock not present ${sym}`);
    }

    //add validation for , quantity and price

    const user1 = this.users.get(userid);
    if (user1 === undefined) {
      throw new Error(`user1 not present ${userid}`);
    }
    user1.buyStock(sym, quantity, price);
  }
  sellStock(userid: string, sym: string, quantity: number, price: number) {
    if (!this.stocks.get(sym)) {
      throw new Error(`stock not present ${sym}`);
    }
    const user1 = this.users.get(userid);
    if (user1 === undefined) {
      throw new Error(`user1 not present ${userid}`);
    }
    user1.sellStock(sym, quantity, price);
  }
  getStock() {
    return [...this.stocks.values()];
  }
  getHoldings(Id: string) {
    const user1 = this.users.get(Id);
    if (user1 === undefined) {
      throw new Error(`User not present of Id : ${Id}`);
    }
    return user1.getHoldings();
  }
  currentBalance(Id: string): number {
    const user1 = this.users.get(Id);
    if (user1 === undefined) {
      throw new Error(`Invalid User Id: ${Id}`);
    }
    return user1.currentBalance();
  }
  profitLoss(Id:string){
     const user1 = this.users.get(Id);
      if (!user1) {
      throw new Error(`Invalid User Id: ${Id}`);
    }
    return user1.profitLoss()
  }
   transactionHistory(Id:string){
    const user1 = this.users.get(Id);
    if (user1 === undefined) {
      throw new Error(`User not present of Id : ${Id}`);
    }
    return user1.transactionHistory()
  }

}
const system1 = new system();
system1.addstock("WIP", "wipro", 800);
system1.addstock("TCS", "tata", 800);
system1.addstock("KPIT", "kpit tech", 800);

system1.addUser("abhinav", "6206008078",100000);
system1.buyStock("6206008078", "TCS", 10, 900);
system1.sellStock("6206008078", "TCS", 5, 1000);
system1.sellStock("6206008078", "TCS", 5, 1200);
console.log(system1.getStock());
console.log(system1.getHoldings("6206008078"));
console.log("current balace is :",system1.currentBalance("6206008078"));
console.log(system1.transactionHistory("6206008078"));
console.log("Overall Profit and Loss :",system1.profitLoss("6206008078"))