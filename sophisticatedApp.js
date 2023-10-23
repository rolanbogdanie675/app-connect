/* 
   Filename: sophisticatedApp.js
   Description: A complex and sophisticated JavaScript application that manages an online store
*/

// Store class
class Store {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.products = [];
    this.customers = [];
    this.orders = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }

  removeCustomer(customer) {
    const index = this.customers.indexOf(customer);
    if (index !== -1) {
      this.customers.splice(index, 1);
    }
  }

  placeOrder(customer, product, quantity) {
    const order = new Order(customer, product, quantity);
    if (order.isValid()) {
      this.orders.push(order);
      return true;
    }
    return false;
  }
}

// Product class
class Product {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

// Customer class
class Customer {
  constructor(name, email, address) {
    this.name = name;
    this.email = email;
    this.address = address;
  }
}

// Order class
class Order {
  constructor(customer, product, quantity) {
    this.customer = customer;
    this.product = product;
    this.quantity = quantity;
    this.status = "Pending";
  }

  isValid() {
    return this.product.stock >= this.quantity;
  }

  getTotal() {
    return this.product.price * this.quantity;
  }

  setStatus(status) {
    this.status = status;
  }
}

// Creating store instance
const myStore = new Store("My Online Store", "123 Main St");

// Creating products
const laptop = new Product("Laptop", 999, 10);
const phone = new Product("Phone", 699, 20);
const tv = new Product("TV", 1499, 5);

// Adding products to the store
myStore.addProduct(laptop);
myStore.addProduct(phone);
myStore.addProduct(tv);

// Creating customers
const john = new Customer("John Doe", "john@example.com", "456 Elm St");
const jane = new Customer("Jane Smith", "jane@example.com", "789 Oak St");

// Adding customers to the store
myStore.addCustomer(john);
myStore.addCustomer(jane);

// Placing orders
myStore.placeOrder(john, laptop, 2);
myStore.placeOrder(jane, phone, 1);

// Output store information
console.log(`Store Name: ${myStore.name}`);
console.log(`Store Address: ${myStore.address}`);

// Output products
console.log("Available Products:");
for (const product of myStore.products) {
  console.log(`${product.name} - Price: $${product.price}`);
}

// Output customers
console.log("Customers:");
for (const customer of myStore.customers) {
  console.log(`Name: ${customer.name} - Email: ${customer.email}`);
}

// Output orders
console.log("Orders:");
for (const order of myStore.orders) {
  console.log(`Customer: ${order.customer.name}`);
  console.log(`Product: ${order.product.name}`);
  console.log(`Quantity: ${order.quantity}`);
  console.log(`Total: $${order.getTotal()}`);
  console.log(`Status: ${order.status}`);
  console.log("---------------");
}