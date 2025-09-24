// Rebuild simple inheritance chain (e.g. Animal → Dog → Labrador)

class Animal {
  constructor(name, age, species) {
    this.name = name;
    this.age = age;
    this.species = species;
  }
  whoAmI() {
    console.log(`${this.name} is a ${this.species}`);
  }
}

class Dog extends Animal {
  constructor(name, age, breed, isTrained) {
    super(name, age, 'Canine');
    this.breed = breed;
    this.isTrained = isTrained;
  }
  bark() {
    console.log(`${this.name} is barking`);
  }
}

class Labrador extends Dog {
  constructor(name, age, isTrained, color, favouriteToy) {
    super(name, age, 'Labrador', isTrained);
    this.color = color;
    this.favouriteToy = favouriteToy;
  }
  fetch() {
    console.log(`${this.name} is fetching ${this.favouriteToy}`);
  }
}

const max = new Labrador('Max', 2, true, 'orange', 'slippers');
max.bark();
max.whoAmI();
max.fetch();
