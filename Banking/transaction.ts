// Transactions

// id
// account
// type: DEPOSIT | WITHDRAW
// amount
// timestamp
type MoneyType = "DEPOSIT" | "WITHDRAW";
class transaction {
  public readonly id: string;
  public readonly timestamp: Date;

  constructor(
    public moneytype: MoneyType,
    public amount: number,
    public accountId: string,
    public senderid?: string,
  ) {
    if (!Number.isInteger(amount) || amount <= 0) {
      throw new Error("Invalid amount");
    }

    if (moneytype !== "DEPOSIT" && moneytype !== "WITHDRAW") {
      throw new Error("Invalid money type");
    }
    this.id = crypto.randomUUID();
    this.timestamp = new Date();
  }
}
export default transaction;
