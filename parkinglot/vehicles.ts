// Level 17 — Parking Lot

// Implement an in-memory Parking Lot System.

// Requirements

// Vehicles

// id
// license number
// type: CAR | BIKE | TRUCK

// Parking Spots

// id
// type
// occupied/free

// Parking Ticket

// id
// vehicle
// spot
// entry time
// exit time
// Operations
// Add vehicle
// Add parking spot
// Park vehicle
// Remove vehicle
// Find vehicle
// Get available spots
// Get occupied spots
// Get parking ticket
// Calculate parking fee when leave parking
// Rules
// Vehicle license number must be unique.
// A vehicle cannot occupy multiple spots.
// A vehicle can park only in a compatible spot.
// A full parking lot cannot accept another vehicle.
// A vehicle cannot leave if it is not parked.
// Invalid IDs/types should be handled safely.

class Vehicle {
  public status: "PARKED" | "FREE" ;
  constructor(
    public readonly id: string,
    public licensenumber: string,
    public phonenumber?: string,
  ) {
    if (typeof id !== "string" || id.trim() === "") {
      throw new Error("vehicles ID must be a non-empty string");
    }
    if (typeof licensenumber !== "string" || licensenumber.trim() === "") {
      throw new Error("vehicles number must be a non-empty string");
    }

    if (phonenumber !== undefined && !/^[6-9]\d{9}$/.test(phonenumber))
      throw new Error("invalid phone number");

    this.status = "FREE";
  }
}
export default Vehicle;