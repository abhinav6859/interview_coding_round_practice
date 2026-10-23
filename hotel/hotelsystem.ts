import Booking from "./booking.ts";
import Guest from "./guest.ts";
import Room from "./room.ts";



class HotelSystem {

    private guests = new Map<string, Guest>();
    private rooms = new Map<string, Room>();
    private bookings = new Map<string, Booking>();

    private bookingCounter = 1;
  


addGuest(guest : Guest) {
  if (!(guest instanceof Guest)) {
    throw new Error("Invalid guest");
  }

  if (this.guests.has(guest.id)) {
    throw new Error("Guest already exists");
  }

  this.guests.set(guest.id, guest);
}
addRoom(room : Room) {
  if (!(room instanceof Room)) {
    throw new Error("Invalid room");
  }

  if (this.rooms.has(room.id)) {
    throw new Error("Room already exists");
  }

  this.rooms.set(room.id, room);
}

getGuest(id : string) {
  if (typeof id !== "string" || id.trim() === "") {
    throw new Error("Invalid guest ID");
  }

  const guest = this.guests.get(id);

  if (!guest) {
    throw new Error("Guest not found");
  }

  return guest;
}

getRoom(id : string) {
  const room = this.rooms.get(id);

  if (!room) {
    throw new Error("Room not found");
  }

  return room;
}

bookRoom(guestId : string, roomId : string) {
  if (typeof guestId !== "string" || guestId.trim() === "") {
    throw new Error("Invalid guest ID");
  }

  if (typeof roomId !== "string" || roomId.trim() === "") {
    throw new Error("Invalid room ID");
  }

  const guest = this.guests.get(guestId);

  if (!guest) {
    throw new Error("Guest not found");
  }

  const room = this.rooms.get(roomId);

  if (!room) {
    throw new Error("Room not found");
  }

  if (room.status !== "AVAILABLE") {
    throw new Error("Room is not available");
  }

  const bookingId = `B${this.bookingCounter++}`;

  const booking = new Booking(
    bookingId,
    guestId,
    roomId
  );

  this.bookings.set(booking.id, booking);
  
  room.status = "OCCUPIED";

  return booking;
}
completeBooking(bookingId : string) {
  const booking = this.bookings.get(bookingId);

  if (!booking) {
    throw new Error("Booking not found");
  }

  if (booking.status !== "ACTIVE") {
    throw new Error(
      "Only active bookings can be completed"
    );
  }

  const room = this.rooms.get(booking.roomId);

  if (!room) {
    throw new Error("Room not found");
  }

  booking.status = "COMPLETED";
  room.status = "AVAILABLE";

  return booking;
}
cancelBooking(bookingId : string) {
  const booking = this.bookings.get(bookingId);

  if (!booking) {
    throw new Error("Booking not found");
  }

  if (booking.status !== "ACTIVE") {
    throw new Error(
      "Only active bookings can be cancelled"
    );
  }

  const room = this.rooms.get(booking.roomId);

  if (!room) {
    throw new Error("Room not found");
  }

  booking.status = "CANCELLED";
  room.status = "AVAILABLE";

  return booking;
}
getAllGuests(){
  return this.guests.values();
}
}
export default HotelSystem;