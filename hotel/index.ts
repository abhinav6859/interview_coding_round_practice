import HotelSystem from "./hotelsystem.js";
import Guest from "./guest.js";
import Room from "./room.js";

const hotelSystem = new HotelSystem();

// Example usage
// const guest1 = new Guest("g1", "John Doe");
// const guest2 = new Guest("g2", "Jane Smith");

// hotelSystem.addGuest(guest1);
// hotelSystem.addGuest(guest2);


hotelSystem.addGuest(
  new Guest("G1", "Abhinav")
);
hotelSystem.addGuest(
  new Guest("G2", "John Doe")
);
hotelSystem.addRoom(
  new Room("R1", 101)
);
hotelSystem.addRoom(
  new Room("R2", 102)
);

const a =hotelSystem.bookRoom("G1", "R1");
hotelSystem.cancelBooking("B1");
console.log(hotelSystem.getGuest("G1"));
console.log(hotelSystem.getRoom("R1"));
// want all the guests and rooms to be printed
console.log([...hotelSystem.getAllGuests()]);

console.log(a);
