//? ------------1------------
// class DatabaseConnection {
//   constructor() {
//     if (DatabaseConnection.instance) {
//       return DatabaseConnection.instance;
//     }
//     DatabaseConnection.instance = this;
//   }

//   connect() {
//     console.log('Database connected');
//   }

//   disconnect() {
//     console.log('Database disconnected');
//   }
// }

// const db1 = new DatabaseConnection();
// const db2 = new DatabaseConnection();

// console.log(db1 === db2); // true

// db1.connect();
// db1.disconnect();
// db2.connect();
// db2.disconnect();

//? ------------2------------
// class Vehicle {
//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }
// }
// class Car extends Vehicle {
//   drive() {
//     console.log(`${this.brand} ${this.model} car is driving smoothly`);
//   }
// }
// class Bike extends Vehicle {
//   drive() {
//     console.log(`${this.brand} ${this.model} bike is driving smoothly`);
//   }
// }

// const types = { car: Car, bike: Bike };
// Object.freeze(types);
// class VehicleFactory {
//   static createVehicle(type, brand, model) {
//     return new types[type](brand, model);
//   }
// }
// const car = VehicleFactory.createVehicle('car', 'Tesla', 'S');
// const bike = VehicleFactory.createVehicle('bike', 'Yamaha', 'R1');
// car.drive();
// bike.drive();

//? ------------3------------
// class Coffee {
//   cost() {
//     return 5;
//   }
// }
// class SugarDecorator {
//   constructor(baseIngredient) {
//     this.baseIngredient = baseIngredient;
//   }
//   cost() {
//     return this.baseIngredient.cost() + 1;
//   }
// }
// class MilkDecorator {
//   constructor(baseIngredient) {
//     this.baseIngredient = baseIngredient;
//   }
//   cost() {
//     return this.baseIngredient.cost() + 2;
//   }
// }

// let coffee = new SugarDecorator(new MilkDecorator(new Coffee()));
// console.log(coffee.cost()); // 8

//? ------------4------------
// class Shape {
//   constructor(name) {
//     this.name = name;
//   }
//   draw() {
//     throw new Error('draw() method must be implemented in subclass only');
//   }
//   clone() {
//     return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
//   }
// }
// class Circle extends Shape {
//   constructor(radius) {
//     super('Circle');
//     this.radius = radius;
//   }
//   draw() {
//     console.log(`Drawing a circle with radius ${this.radius}`);
//   }
// }

// class Rectangle extends Shape {
//   constructor(width, height) {
//     super('Rectangle');
//     this.width = width;
//     this.height = height;
//   }
//   draw() {
//     console.log(`Drawing a rectangle with width ${this.width} and height ${this.height}`);
//   }
// }

// class ShapeRegistry {
//   #registry = {};
//   registerShape(key, shape) {
//     this.#registry[key] = shape;
//   }
//   createShape(key) {
//     if (!this.#registry[key]) throw new Error(`[[${key}]] doesn't exist in registry`);
//     return this.#registry[key].clone();
//   }
// }
// const registry = new ShapeRegistry();
// registry.registerShape('circle', new Circle(10));
// registry.registerShape('rectangle', new Rectangle(20, 30));

// const circle1 = registry.createShape('circle');
// const circle2 = registry.createShape('circle');
// const rect1 = registry.createShape('rectangle');
// console.log(circle1); //false
// circle2.radius = 20;
// circle1.draw(); // "Drawing a circle with radius 10"
// circle2.draw(); // "Drawing a circle with radius 20"
// rect1.draw(); // "Drawing a rectangle with width 20 and height 30"

//? ------------5------------
class AdditionStrategy {
  calculate(a, b) {
    return a + b;
  }
}
class SubtractionStrategy {
  calculate(a, b) {
    return a - b;
  }
}
class MultiplicationStrategy {
  calculate(a, b) {
    return a * b;
  }
}
class DivisionStrategy {
  calculate(a, b) {
    if (b === 0) throw new Error('Cannot divide by zero');
    return a / b;
  }
}
class Calculator {
  #strategy;
  constructor(strategy) {
    this.#strategy = strategy;
  }
  execute(a, b) {
    if (!this.#strategy.calculate)
      throw new Error(
        `[[${this.#strategy.constructor.name()}]] : strategy doesn't implement calculate() method`
      );
    return this.#strategy.calculate(a, b);
  }
  setStrategy(newStrategy) {
    this.#strategy = newStrategy;
  }
}
const calculator = new Calculator(new AdditionStrategy());
console.log(calculator.execute(10, 5)); // 15

calculator.setStrategy(new MultiplicationStrategy());
console.log(calculator.execute(10, 5)); // 50
