abstract class Shape {
  abstract calculateArea(): number;
}

abstract class ColoredShape extends Shape {
  abstract color: string;

  displayColor(): void {
    console.log(`Color: ${this.color}`);
  }
}

class ColoredCircle extends ColoredShape {
  radius: number;
  color: string;

  constructor(radius: number, color: string) {
    super();
    this.radius = radius;
    this.color = color;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class ColoredRectangle extends ColoredShape {
  width: number;
  height: number;
  color: string;

  constructor(width: number, height: number, color: string) {
    super();
    this.width = width;
    this.height = height;
    this.color = color;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

const circle = new ColoredCircle(3, "green");
const rectangle = new ColoredRectangle(8, 4, "yellow");

const shapes: ColoredShape[] = [circle, rectangle];

shapes.forEach((shape) => {
  console.log(`Area: ${shape.calculateArea()}`);
  shape.displayColor();
});