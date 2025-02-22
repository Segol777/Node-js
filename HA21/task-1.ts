abstract class Animal {
  abstract makeSound(): void
}

class Dog extends Animal {
  makeSound(): void {
      console.log('Bark');
      
  }
}

class Cat extends Animal {
  makeSound(): void {
      console.log('Meow');
      
  }
}

const animals: Animal[] = [new Dog(), new Cat()]

animals.forEach(animal => {
  animal.makeSound()
});