


export type TransactionType =
  | "DEPOSIT"
  | "WITHDRAW"
  | "TRANSFER_IN"
  | "TRANSFER_OUT";

export default class Transaction {
  public readonly id = crypto.randomUUID();
  public readonly timestamp = new Date();

  constructor(
    public readonly accountId: string,
    public readonly type: TransactionType,
    public readonly amount: number,
    public readonly relatedAccountId?: string,
    public readonly transferId?: string,
  ) {
    if (!Number.isSafeInteger(amount) || amount <= 0) {
      throw new Error("Invalid transaction amount");
    }

    const isTransfer = type === "TRANSFER_IN" ||
      type === "TRANSFER_OUT";

    if (
      type !== "DEPOSIT" &&
      type !== "WITHDRAW" &&
      !isTransfer
    ) {
      throw new Error("Invalid transaction type");
    }

    if (
      isTransfer &&
      (
        !relatedAccountId ||
        relatedAccountId.trim() === "" ||
        !transferId ||
        transferId.trim() === ""
      )
    ) {
      throw new Error("Transfer details are required");
    }
  }
}
