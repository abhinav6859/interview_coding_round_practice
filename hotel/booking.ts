class Booking {

  public status: "ACTIVE" | "CANCELLED" | "COMPLETED" | "AVAILABLE";
  constructor(public readonly id : string, public readonly guestId : string, public readonly roomId : string) {
    if (typeof id !== "string" || id.trim() === "") {
      throw new Error("Booking ID must be a non-empty string");
    }

    if (typeof guestId !== "string" || guestId.trim() === "") {
      throw new Error("Guest ID must be a non-empty string");
    }

    if (typeof roomId !== "string" || roomId.trim() === "") {
      throw new Error("Room ID must be a non-empty string");
    }
    this.status = "ACTIVE";
  }
}

export default Booking;