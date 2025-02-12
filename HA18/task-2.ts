interface Engine {
  type: string;
  horsepower: number;
}

interface Car {
  make: string;
  model: string;
  engine: Engine;
  year?: number; 
}


const car: Car = {
  make: "Toyota",
  model: "Corolla",
  engine: {
    type: "Hybrid",
    horsepower: 121
  },
  year: 2020 
}
const car1: Car = {
  make: "Subaru",
  model: "Forester",
  engine: {
    type: "Crossover",
    horsepower: 150
  } 
}


function printCarInfo(car: Car): void {
  console.log(`Марка: ${car.make}
    Модель: ${car.model}
    Тип двигателя: ${car.engine.type}
    Мощность: ${car.engine.horsepower} л.с.`);
  

  if (car.year) {
    console.log(`Год выпуска: ${car.year}`);
  } else {
    console.log(`Год выпуска не указан`);
  }
}


printCarInfo(car);
printCarInfo(car1);