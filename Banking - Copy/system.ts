

import Customer from "./customer";
import Account from "./account";
import Transaction from "./transaction";

export default class BankingSystem {
  private customers = new Map<string, Customer>();
  private accounts = new Map<string, Account>();
  private transactions = new Map<string, Transaction>();

  // Add customer
  addCustomer(customer: Customer): void {
    if (!(customer instanceof Customer)) {
      throw new Error("Invalid customer");
    }

    if (this.customers.has(customer.id)) {
      throw new Error("Customer ID already exists");
    }

    this.customers.set(customer.id, customer);
  }

  getCustomers(): Customer[] {
    return [...this.customers.values()];
  }

  // Create account
  createAccount(account: Account): void {
    if (!(account instanceof Account)) {
      throw new Error("Invalid account");
    }

    if (this.accounts.has(account.id)) {
      throw new Error("Account ID already exists");
    }

    if (!this.customers.has(account.customerId)) {
      throw new Error("Customer does not exist");
    }

    this.accounts.set(account.id, account);
  }

  getAccounts(): Account[] {
    return [...this.accounts.values()];
  }

  // Find account safely
  private findAccount(accountId: string): Account {
    const account = this.accounts.get(accountId);

    if (!account) {
      throw new Error("Account does not exist");
    }

    return account;
  }

  // Validate amount
  private validateAmount(amount: number): void {
    if (!Number.isSafeInteger(amount) || amount <= 0) {
      throw new Error("Amount must be a positive safe integer");
    }
  }

  // Store a completed transaction
  private recordTransaction(
    accountId: string,
    type: "DEPOSIT" | "WITHDRAW",
    amount: number,
  ): void {
    const record = new Transaction(accountId, type, amount);
    this.transactions.set(record.id, record);
  }

  // Deposit
  depositMoney(accountId: string, amount: number): void {
    this.validateAmount(amount);

    const account = this.findAccount(accountId);

    // Check balance overflow before modifying the account.
    if (!Number.isSafeInteger(account.balance + amount)) {
      throw new Error("Balance exceeds safe integer range");
    }

    account.deposit(amount);
    this.recordTransaction(accountId, "DEPOSIT", amount);
  }

  // Withdraw
  withdrawMoney(accountId: string, amount: number): void {
    this.validateAmount(amount);

    const account = this.findAccount(accountId);

    // Validate the withdrawal before modifying the account.
    if (account.balance < amount) {
      throw new Error("Insufficient balance");
    }

    account.withdraw(amount);
    this.recordTransaction(accountId, "WITHDRAW", amount);
  }

  // Transfer money
  transferMoney(
    fromAccountId: string,
    toAccountId: string,
    amount: number,
  ): void {
    this.validateAmount(amount);

    if (fromAccountId === toAccountId) {
      throw new Error("Cannot transfer to the same account");
    }

    const source = this.findAccount(fromAccountId);
    const destination = this.findAccount(toAccountId);

    // Validate all expected failure conditions before changing balances.
    if (source.balance < amount) {
      throw new Error("Insufficient balance");
    }

    if (!Number.isSafeInteger(destination.balance + amount)) {
      throw new Error("Destination balance exceeds safe integer range");
    }

    const transferId = crypto.randomUUID();

    // Create both records before modifying either balance.
    const outgoing = new Transaction(
      source.id,
      "TRANSFER_OUT",
      amount,
      destination.id,
      transferId,
    );

    const incoming = new Transaction(
      destination.id,
      "TRANSFER_IN",
      amount,
      source.id,
      transferId,
    );

    // All validations have passed. Apply the transfer.
    source.withdraw(amount);
    destination.deposit(amount);

    // Store both sides of the transfer.
    this.transactions.set(outgoing.id, outgoing);
    this.transactions.set(incoming.id, incoming);
  }

  // Get balance
  getBalance(accountId: string): number {
    return this.findAccount(accountId).balance;
  }

  // Transaction history
  getTransactionHistory(accountId: string): Transaction[] {
    this.findAccount(accountId);

    return [...this.transactions.values()]
      .filter((transaction) => transaction.accountId === accountId)
      .sort(
        (a, b) =>
          a.timestamp.getTime() - b.timestamp.getTime(),
      );
  }
}
