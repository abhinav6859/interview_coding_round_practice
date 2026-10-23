class Booking {
  public checkInTime: Date;
  public checkOutTime: Date | null;

  constructor() {
    this.checkInTime = new Date();
    this.checkOutTime = null;
  }

  checkOut(): void {
    this.checkOutTime = new Date();
  }
}


const booking = new Booking();

console.log("Check in:", booking.checkInTime.toLocaleString());


booking.checkOut();

console.log("Check out:", booking.checkOutTime?.toLocaleString());