class delivery {
  constructor() {
    this.customers = new Map();
    this.riders = new Map();
  }
  addcustomer(customer) {
    this.customers.set(customer.id, customer);
  }
  addrider(rider) {
    this.riders.set(rider.id, rider);
  }
  findNearestDriver(a) {
    let c = this.customers.get(a).location;
    let bestrider = null;
    let bestdis = Infinity;
    for (let i of this.riders.values()) {
      if (i.status !== "AVAILABLE") continue;
      let dx = i.location.x - c.x;
      let dy = i.location.y - c.y;
      let sum = dx * dx + dy * dy;
      sum = Math.sqrt(sum);
      if (sum < bestdis) {
        bestdis = sum;
        bestrider = i.id;
      }
    }
    return bestrider;
  }
}
const system = new delivery();
system.addcustomer({
  id: "C1",
  location: { x: 0, y: 4 },
});
system.addrider({
  id: "D1",
  name: "John",
  location: { x: 8, y: 4 },
  status: "AVAILABLE",
});
system.addrider({
  id: "D2",
  name: "Mike",
  location: { x: 61, y: 0 },
  status: "AVAILABLE",
});
system.addrider({
  id: "D3",
  name: "Sam",
  location: { x: 9, y: 4 },
  status: "AVAILABLE",
});
console.log(system.findNearestDriver("C1"));
