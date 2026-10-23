
export default class Customer {
  constructor(
    public readonly id: string,
    public readonly name: string,
  ) {
    if (typeof id !== "string" || id.trim() === "") {
      throw new Error("Invalid customer ID");
    }

    if (typeof name !== "string" || name.trim() === "") {
      throw new Error("Invalid customer name");
    }
  }
}
