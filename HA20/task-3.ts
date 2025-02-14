class Vehicle {
  make: string; 
  model: string; 

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}

class Motorcycle extends Vehicle {
  type: string;

  constructor(make: string, model: string, type: string) {
    super(make, model);
    this.type = type;
  }
}

const myMotorcycle = new Motorcycle("Yamaha", "MT-07", "Sport")

console.log(`Make: ${myMotorcycle.make}`)   
console.log(`Model: ${myMotorcycle.model}`)
console.log(`Type: ${myMotorcycle.type}`)
