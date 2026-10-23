class Room {
  public status:
  "OCCUPIED"|
  "CANCELLED" |
  "COMPLETED" |
  "AVAILABLE";
  constructor(public readonly id : string, public number : number) {
    if (typeof id !== "string" || id.trim() === "") {
      throw new Error("Room ID must be a non-empty string");
    }

    if (!Number.isInteger(number) || number <= 0) {
      throw new Error("Room number must be a positive integer");
    }
    this.status = "AVAILABLE";
  }


}
export default Room;