
class parkingslot {
  public status: "occupied" | "free";
  constructor(public readonly id: string) {
    if (typeof id !== "string" || id.trim() === "")
      throw new Error("Invalid id of parking slot");

    this.status = "free";
  }
}
export default parkingslot;
