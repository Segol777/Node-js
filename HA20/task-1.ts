class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  
  sound(): void {
    console.log("The animal makes a sound")
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, species: string, breed: string) {
    super(name, species);
    this.breed = breed;
  }
  
  sound(): void {
    console.log("The dog barks")
  }
}

const myAnimal = new Animal("Generic Animal", "Unknown Species")
myAnimal.sound()

const myDog = new Dog("Buddy", "Dog", "Golden Retriever")
myDog.sound()
