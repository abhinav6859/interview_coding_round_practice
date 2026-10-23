
import BankingSystem from "./system";
import Customer from "./customer";
import Account from "./account";

const bank = new BankingSystem();

bank.addCustomer(new Customer("C1", "Abhinav"));

bank.createAccount(
  new Account("A1", "SAVINGS", 100000, "C1"),
);

bank.createAccount(
  new Account("A2", "CURRENT", 50000, "C1"),
);

// All amounts are in paise.
bank.depositMoney("A1", 10000);
bank.withdrawMoney("A2", 5000);
bank.transferMoney("A1", "A2", 20000);

console.log("A1 balance:", bank.getBalance("A1"));
console.log("A2 balance:", bank.getBalance("A2"));

console.log("A1 history:", bank.getTransactionHistory("A1"));
console.log("A2 history:", bank.getTransactionHistory("A2"));
