// a program that creates a super class then creates two child classes. Finally, from the two child classes some objects are created and shows their properties.

class Vehicle {
  constructor(driver, wheels) {
    this.driver = driver;
    this.wheels = wheels;
  }
}

class Bus extends Vehicle {
  constructor(driver, wheels, seats) {
    super(driver, wheels);
    this.seats = seats;
  }
}

class Truck extends Vehicle {
  constructor(driver, wheels, capacity) {
    super(driver, wheels);
    this.capacity = capacity;
  }
}

var himachol = new Bus("Himu", 6, 40);
var saPoribohon = new Truck("Rofiq", 10, 8);

console.log(himachol);
console.log(saPoribohon);
