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
// Calculate parking fee
// Rules
// Vehicle license number must be unique.
// A vehicle cannot occupy multiple spots.
// A vehicle can park only in a compatible spot.
// A full parking lot cannot accept another vehicle.
// A vehicle cannot leave if it is not parked.
// Invalid IDs/types should be handled safely.

import ParkingSystem from "./system";
import Vehicle from "./vehicles";
import parkingslot from "./Parkingslot";
import ParkingRecord from "./Parkingstatus";

const parkingsystem = new ParkingSystem();

parkingsystem.addVehicle(new Vehicle("v1", "9999", "6787767759"));
console.log(parkingsystem.getVehicle("v1"));
const a = parkingsystem.getAllVehicle();
console.log([...a.values()]);
parkingsystem.addSlot(new parkingslot("s1"));
parkingsystem.parkVehicle("v1","s1")
const b = parkingsystem.getAllParking();
console.log([...b.values()]);
