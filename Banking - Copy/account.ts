
export type AccountType = "SAVINGS" | "CURRENT";

export default class Account {
  private _balance: number;

  constructor(
    public readonly id: string,
    public readonly accountType: AccountType,
    initialBalance: number,
    public readonly customerId: string,
  ) {
    if (typeof id !== "string" || id.trim() === "") {
      throw new Error("Invalid account ID");
    }

    if (typeof customerId !== "string" || customerId.trim() === "") {
      throw new Error("Invalid customer ID");
    }

    if (
      accountType !== "SAVINGS" &&
      accountType !== "CURRENT"
    ) {
      throw new Error("Invalid account type");
    }

    if (
      !Number.isSafeInteger(initialBalance) ||
      initialBalance < 0
    ) {
      throw new Error("Invalid initial balance");
    }

    this._balance = initialBalance;
  }

  get balance(): number {
    return this._balance;
  }

  deposit(amount: number): void {
    this.validateAmount(amount);

    if (!Number.isSafeInteger(this._balance + amount)) {
      throw new Error("Balance exceeds safe integer range");
    }

    this._balance += amount;
  }

  withdraw(amount: number): void {
    this.validateAmount(amount);

    if (this._balance < amount) {
      throw new Error("Insufficient balance");
    }

    this._balance -= amount;
  }

  private validateAmount(amount: number): void {
    if (!Number.isSafeInteger(amount) || amount <= 0) {
      throw new Error("Amount must be a positive safe integer");
    }
  }
}
