import Vehicle from "./vehicles";
import parkingslot from "./Parkingslot";
import ParkingRecord from "./Parkingstatus";

class ParkingSystem {
  private Vehicles = new Map<string, Vehicle>();
  private parkings = new Map<string, ParkingRecord>();
  private Slots = new Map<string, parkingslot>();

  addVehicle(vehicle: Vehicle): void {
    if (!(vehicle instanceof Vehicle)) {
      throw new Error("Invalid vehicle");
    }
    if (this.Vehicles.has(vehicle.id)) {
      throw new Error("already present vehicle");
    }
    this.Vehicles.set(vehicle.id, vehicle);
  }
  getVehicle(id: string): Vehicle | undefined {
    if (!this.Vehicles.has(id)) {
      throw new Error("vehicle not found");
    }
    return this.Vehicles.get(id);
  }
  getAllVehicle(): Vehicle[] {
    return [...this.Vehicles.values()];
  }
  addSlot(slot: parkingslot): void {
    if (!(slot instanceof parkingslot)) {
      throw new Error("Invalid slot");
    }
    if (this.Slots.has(slot.id)) {
      throw new Error("already present slot");
    }

    this.Slots.set(slot.id, slot);
  }
  parkVehicle(vehicleId: string, slotId: string): void {
    const vehicle = this.Vehicles.get(vehicleId);

    if (!vehicle) {
      throw new Error("Vehicle not found");
    }

    const slot = this.Slots.get(slotId);

    if (!slot) {
      throw new Error("Parking slot not found");
    }

    if (vehicle.status !== "FREE") {
      throw new Error("Vehicle is already parked");
    }

    if (slot.status !== "free") {
      throw new Error("Parking slot is already occupied");
    }
    const parking = new ParkingRecord(vehicleId, slotId);

    this.parkings.set(parking.id, parking);

    vehicle.status = "PARKED";
    slot.status = "occupied";
  }
  exitParking(id: string): number {
    if (typeof id !== "string" || id.trim() === "")
      throw new Error("id not valid ");
    const p = this.parkings.get(id);
    if (!p) {
      throw new Error("Parking record not found");
    }

    if (p.exittime !== null) {
      throw new Error("this id  already exit");
    }

    const vid = p.vehicleid;
    const vehicle = this.Vehicles.get(vid);
    if (!vehicle) {
      throw new Error("Vehicle not found");
    }
    vehicle.status = "FREE";
    const sid = p.slotid;
    const slot = this.Slots.get(sid);

    if (!slot) {
      throw new Error("Slot not found");
    }

    slot.status = "free";

    p.exittime = new Date();

    let totalsecond = (p.exittime.getTime() - p.entrytime.getTime()) / 1000;
    let totalmoney = 0.1 * totalsecond;
    return totalmoney;
  }

  getAllParking(): ParkingRecord[] {
    return [...this.parkings.values()];
  }
  getAvailableSpot(): number {
    let count = 0;
    for (let p of this.Slots.values()) if (p.status === "free") count++;
    return count;
  }
  getOccupiedSpot(): number {
    let count = 0;
    for (let p of this.Slots.values()) if (p.status !== "free") count++;
    return count;
  }
}
export default ParkingSystem;
