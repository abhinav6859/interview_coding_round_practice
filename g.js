class Delivery {
  constructor() {
    this.customers = new Map();
    this.riders = new Map();
  }

  addCustomer(customer) {
    this.customers.set(customer.id, customer);
  }

  addRider(rider) {
    this.riders.set(rider.id, rider);
  }

  findNearestDriver(customerId) {
    const customer = this.customers.get(customerId);

    if (!customer) {
      return null;
    }

    const c = customer.location;

    let bestDriver = null;
    let bestDistance = Infinity;

    for (const driver of this.riders.values()) {
      if (driver.status !== "AVAILABLE") {
        continue;
      }

      const dx = driver.location.x - c.x;
      const dy = driver.location.y - c.y;

      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < bestDistance) {
        bestDistance = distance;
        bestDriver = driver;
      }
    }

    return bestDriver;
  }
}

const system = new Delivery();
system.addCustomer({
  id: "C1",
  location: { x: 0, y: 4 },
});
system.addRider({
  id: "D1",
  name: "John",
  location: { x: 8, y: 4 },
  status: "AVAILABLE",
});
system.addRider({
  id: "D2",
  name: "Mike",
  location: { x: 6, y: 0 },
  status: "AVAILABLE",
});
system.addRider({
  id: "D3",
  name: "Sam",
  location: { x: 9, y: 4 },
  status: "AVAILABLE",
});
console.log(system.findNearestDriver("C1"));
