// Level 15 — Mini E-commerce Order System

// Implement an in-memory Mini E-commerce Order System in JavaScript/TypeScript.

// Requirements
//   Products
// id
// name
// price
// stock
//   Customers
// id
// name
//    Orders
// id
// customerId
// items
// totalAmount
// status
// Add a product.
// Add a customer.
// Get a product by ID.
// Create an order containing multiple products.
// Reduce product stock when an order is created.
// Do not allow an order if any product has insufficient stock.
// Calculate the total order amount.
// Cancel an order.
// Restore product stock when an order is cancelled.
// Get all orders of a customer.
// Get all orders.
// Update order status.
// Calculate the total revenue from completed orders.

class Ecommercesystem {

  constructor() {
    this.products = new Map();
    this.customers = new Map();
    this.orders = new Map();
    this.ordercounter = 0;
  }

  addproduct(product) {
    this.products.set(product.id, product);
  }
  addcustomer(customer) {
    this.customers.set(customer.id, customer);
  }
  getproduct(id) {
    if (!this.products.has(id)) {
      console.log("product not found");
    }
    return this.products.get(id);
  }
  makeorder(data) {
    let amount = 0;
    let pI = data.productIds;
    let productstock;
    if (!this.customers.has(data.customerId)) {
      console.log("user not found so can not make order");
      return;
    }
    for (let p of pI) {
      if (!this.products.has(p)) {
        console.log(
          "this product have not in products",
        );
        return;
      }
      productstock = this.products.get(p).stock;

      if (productstock < 1) {
        console.log("product", this.products.get(p).name, " have not stock");
        return;
      }
      amount += this.products.get(p).price;
    }
    for (let p of pI) {
      this.products.get(p).stock--;
    }
    const order = {
      id: ++this.ordercounter,

      customerid: data.customerId,
      item: pI,
      totalamount: amount,
      status: "PLACED",
    };
    this.orders.set(order.id, order);
    //console.log(this.products.get("P1").price)
  }
  allamount() {
    let ta = 0;
    for (let a of this.orders.keys()) {
      if (this.orders.get(a).status === "CANCELED") {
        continue;
      }
      ta += this.orders.get(a).totalamount;
    }
    return ta;
  }
  cancelorder(id) {
    let ordergetid = this.orders.get(id)
    if (!this.orders.has(id)) {
      console.log("order not found");
      return;
    }
    if (
  ordergetid.status === "COMPLETED" ||
  ordergetid.status === "CANCELED"
) {
  console.log("COMPLETED OR CANCELED ORDER CAN NOT BE CANCEL");
  return;
}
    for (let p of ordergetid.item) {
      this.products.get(p).stock++;
    }

    ordergetid.status = "CANCELED";
  }
  allorder(id) {
    if (!this.customers.has(id)) {
      console.log("user not found so no order");
      return;
    }
    let a = [...this.orders.values()];
    const b = a.filter((user) => user.customerid === id);
    return b;
  }
  completeorder(id) {
    if (!this.orders.has(id)) {
      console.log("order not found");
      return;
    }
    if (this.orders.get(id).status === "CANCELED") {
      console.log("CANCEL ORDER CAN NOT COMPLETE ");
      return ;
    }
    this.orders.get(id).status = "COMPLETED";
  }
  allcompleteamount() {
    let ta = 0;
    for (let a of this.orders.keys()) {
      if (this.orders.get(a).status === "COMPLETED") {
        ta += this.orders.get(a).totalamount;
      }
    }
    return ta;
  }
}
const system = new Ecommercesystem();

system.addcustomer({
  id: 1,
  name: "abhi",
});

system.addcustomer({
  id: "C2",
  name: "Rahul",
});
system.addproduct({
  id: "P1",
  name: "Laptop",
  price: 50000,
  stock: 5,
});

system.addproduct({
  id: "P2",
  name: "Mouse",
  price: 1000,
  stock: 10,
});

system.addproduct({
  id: "P3",
  name: "Keyboard",
  price: 2000,
  stock: 3,
});
system.addproduct({
  id: "P4",
  name: "Keyboard",
  price: 2000,
  stock: 0,
});
system.makeorder({
  customerId: "C1",

  productIds: ["P1", "P2", "P3"],
});
system.makeorder({
  customerId: "C2",

  productIds: ["P1", "P2"],
});
system.makeorder({
  customerId: "C2",

  productIds: ["P1"],
});
system.cancelorder(2);
system.completeorder(3);
console.log([...system.customers.values()]);
console.log([...system.products.values()]);
console.log([...system.orders.values()]);
console.log("total amount of order exclude cancel");
console.log(system.allamount());
console.log("all order of customer id c1");
console.log(system.allorder("C1"));
console.log("total revenue from completed orders");
console.log(system.allcompleteamount());
