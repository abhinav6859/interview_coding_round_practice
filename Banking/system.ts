import customer from "./customer";
import account from "./account";
import transaction from "./transaction";

class BankingSystem {
  private customers = new Map<string, customer>();
  private accounts = new Map<string, account>();
  private transactions = new Map<string, transaction>();
  addCustomer(Customer: customer): void {
    if (!(Customer instanceof customer)) {
      throw new Error("Invalid customer");
    }
    if (this.customers.has(Customer.id)) {
      throw new Error(`this id ${Customer.id}  already present`);
    }
    this.customers.set(Customer.id, Customer);
  }

  getCustomer(): customer[] {
    return [...this.customers.values()];
  }

  addAccount(Account: account): void {
    if (!(Account instanceof account)) {
      throw new Error("Invalid account");
    }
    if (!this.customers.has(Account.customerId)) {
      throw new Error(`this customerid ${Account.customerId}  not present`);
    }
    if (this.accounts.has(Account.id)) {
      throw new Error(`this id ${Account.id}  already present`);
    }
    this.accounts.set(Account.id, Account);
  }
  getAccount() {
    return [...this.accounts.values()];
  }
  manualtransaction(Transaction: transaction): void {
 if (!(Transaction instanceof transaction)) {
      throw new Error("Invalid transaction");
    }
    if (this.transactions.has(Transaction.id)) {
  throw new Error("Duplicate transaction");
}
    
    if (Transaction.senderid !== undefined) {
      throw new Error("In manual transaction no need to senderid");
    }
    if (Transaction.amount <= 0) {
      throw new Error("Insufficient for transaction");
    }
    const A = this.accounts.get(Transaction.accountId);
    if (!A) {
      throw new Error("account not present");
    }
    if (Transaction.moneytype === "WITHDRAW") {
      if (A.balance < Transaction.amount) {
        throw new Error("Insufficent ballance");
      }
      A.balance -= Transaction.amount;
    } else {
      A.balance += Transaction.amount;
    }
    this.transactions.set(Transaction.id, Transaction);
  }
  accounttoaccounttran(Transaction: transaction): void {
     if (!(Transaction instanceof transaction)) {
      throw new Error("Invalid transaction");
    }
    if (this.transactions.has(Transaction.id)) {
  throw new Error("Duplicate transaction");
}
    if (Transaction.senderid === undefined) {
      throw new Error("sender id not present");
    }
   
    if (Transaction.amount <= 0) {
      throw new Error("Insufficient for transaction");
    }
    const A = this.accounts.get(Transaction.accountId);
    if (!A) {
      throw new Error("account not present");
    }
    const S = this.accounts.get(Transaction.senderid);
    if (!S) {
      throw new Error("account not present");
    }
if (A === S) {
  throw new Error("Cannot transfer to the same account");
}
    if (Transaction.moneytype === "WITHDRAW") {
      if (A.balance < Transaction.amount) {
        throw new Error("Insuficient balance");
      }
      A.balance -= Transaction.amount;
      S.balance += Transaction.amount;
    } else {
      if (S.balance < Transaction.amount) {
        throw new Error("Insuficient balance");
      }
      A.balance += Transaction.amount;
      S.balance -= Transaction.amount;
    }
    this.transactions.set(Transaction.id, Transaction);
  }
  getbalance(id: string): number {
    const A = this.accounts.get(id);
    if (!A) {
      throw new Error("Not present account");
    }
    return A.balance;
  }
  transactionhistory(id: string): transaction[] {
    const A = this.accounts.get(id);
    if (!A) {
      throw new Error("Not present account");
    }
    return [...this.transactions.values()].filter(
      (user) => user.accountId === id || user.senderid === id).sort((a,b)=> a.timestamp.getTime() - b.timestamp.getTime(),);
  }
}
export default BankingSystem;
