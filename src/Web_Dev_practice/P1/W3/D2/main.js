//? -------------1--------------
class BankAccount {
  #balance = 0;
  constructor(name, aadharNo, mobileNo) {
    this.name = name;
    this.aadharNo = aadharNo;
    this.mobileNo = mobileNo;
    this.accountNo = this.#generateRandomAccountNo();
  }
  #generateRandomAccountNo() {
    return Math.floor(100000000000 + Math.random() * 900000000000);
  }
  deposit(amount) {
    if (typeof amount !== Number || !isFinite(amount))
      throw new Error('Amount must be a valid number');
    if (amount <= 0) throw new Error('Amount must be greater than zero');
    this.#balance += amount;
    console.log(
      `Amount '${amount}' successfully deposited in ${this.name}'s account : ${this.accountNo}.`
    );
  }
  withdraw(amount) {
    if (typeof amount !== Number || !isFinite(amount))
      throw new Error('Amount must be a valid number');
    if (amount <= 0) throw new Error('Amount must be greater than zero');
    if (amount > this.#balance) throw new Error('Insufficient funds');
    this.#balance -= amount;
    console.log(
      `Amount '${amount}' successfully withdrawn from ${this.name}'s account : ${this.accountNo}.`
    );
  }
  getBalance() {
    console.log(`Current balance is '${this.#balance}'`);
    return this.#balance;
  }
}
try {
  const myAccount = new BankAccount('Ashish Dhami', 427871851342, 8929655912);
  myAccount.getBalance();
  myAccount.deposit(2);
  myAccount.getBalance();
  myAccount.withdraw(71);
  myAccount.getBalance();
} catch (err) {
  console.error(err.message);
}

//? -------------2--------------
class Shape {
  constructor(name) {
    this.name = name;
  }
}
class Circle extends Shape {
  constructor(radius) {
    super('Circle');
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}
class Rectangle extends Shape {
  constructor(height, width) {
    super('Rectangle');
    this.height = height;
    this.width = width;
  }
  getArea() {
    return this.height * this.width;
  }
}
const circle1 = new Circle(20);
const rectangle1 = new Rectangle(10, 20);
function calculateTotalArea(shapesArray) {
  let totalArea = 0;
  shapesArray.forEach((shape) => {
    totalArea += shape.getArea();
  });
  return totalArea.toFixed(2);
}

console.log(calculateTotalArea([circle1, rectangle1]));

//? -------------3--------------
const ROLE = { ADMIN: 'admin', MANAGER: 'manager', STAFF: 'staff' };
Object.freeze(ROLE);

class Employee {
  #salary = 0;
  constructor(name, role) {
    this.name = name;
    if (!ROLE[role]) throw new Error("Role doesn't exist!!");
    this.role = ROLE[role];
  }
  getSalary() {
    if (this.role !== ROLE.ADMIN) throw new Error('Elevated privileges required!!');
    return this.#salary;
  }
  setSalary(amount) {
    if (this.role !== ROLE.ADMIN) throw new Error('Elevated privileges required!!');
    if (amount <= 0 || !isFinite(amount) || typeof amount !== 'number')
      throw new Error('Amount must be a valid number');
    this.#salary = amount;
    console.log('Salary updated successfully.');
  }
  promote(newRole) {
    if (!ROLE[newRole]) throw new Error("Role doesn't exist!!");
    this.role = ROLE[newRole];
    console.log('Employee promoted successfully.');
  }
}

try {
  const employee1 = new Employee('Ashish Dhami', 'MANAGER');
  const employee2 = new Employee('Sam', 'ADMIN');
  console.log(employee2.getSalary());
} catch (err) {
  console.error(err.message);
}

//? -------------4--------------
class Car {
  constructor(brand, model) {
    if (new.target.name === 'Car') throw new Error('Cannot instantiate base class directly!!');
    if (!brand?.trim() || !model?.trim()) throw new Error('Brand and model name are required!!');
    this.brand = brand;
    this.model = model;
  }
  getInfo() {
    return `Brand: ${this.brand}, Model: ${this.model}`;
  }
}

class ElectricCar extends Car {
  constructor(brand, model, batteryCapacity) {
    super(brand, model);
    if (batteryCapacity <= 0 || !isFinite(batteryCapacity) || typeof batteryCapacity !== 'number')
      throw new Error('Battery capacity must be a valid number!!');
    this.batteryCapacity = batteryCapacity;
  }
  drive() {
    console.log(`${this.brand} Model ${this.model} drives silently using electric power.`);
  }
}
class GasCar extends Car {
  constructor(brand, model, fuelTankSize) {
    super(brand, model);
    if (fuelTankSize <= 0 || !isFinite(fuelTankSize) || typeof fuelTankSize !== 'number')
      throw new Error('FuelTank size must be a valid number!!');
    this.fuelTankSize = fuelTankSize;
  }
  drive() {
    console.log(`${this.brand} ${this.model} drives with a roaring engine.`);
  }
}
try {
  // const car1 = new Car();
  const evCar1 = new ElectricCar('Tesla', 'S', 20000);
  const car2 = new GasCar('Porsche', '911 Turbo S', 12);
  console.log(evCar1.getInfo());
  console.log(car2.getInfo());
  evCar1.drive();
  car2.drive();
} catch (err) {
  console.error(err.message);
}

//? -------------5--------------

class Book {
  constructor(title, author, isbn, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailable = isAvailable;
  }
  borrow() {
    if (!this.isAvailable) throw new Error('Already borrowed!!');
    this.isAvailable = !this.isAvailable;
    console.log(`'${this.title}' book borrowed successfully.`);
  }
  returnBook() {
    if (this.isAvailable) throw new Error('Already returned!!');
    this.isAvailable = !this.isAvailable;
    console.log(`'${this.title}' book returned successfully.`);
  }
  getInfo() {
    return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
  }
}
class Member {
  constructor(name, memberId, borrowedBooks) {
    this.name = name;
    this.memberId = memberId;
    this.borrowedBooks = borrowedBooks;
  }
  borrowBook(book) {
    book.borrow();
    this.borrowedBooks.push(book);
  }
  returnBook(book) {
    book.returnBook();
    this.borrowedBooks = this.borrowedBooks.filter(
      (borrowedBook) => borrowedBook.isbn !== book.isbn
    );
  }
  listBorrowedBooks() {
    const borrowedBooks = this.borrowedBooks.map((book) => book.title);
    console.log(borrowedBooks);
  }
}
class Library {
  #books = [];
  #members = [];
  addBook(book) {
    this.#books.push(book);
    console.log(`'${book.title}' book added to collection successfully.`);
  }
  addMember(member) {
    this.#members.push(member);
    console.log(`'${member.name}' added successfully as a member.`);
  }
  findBookByISBN(isbn) {
    return this.#books.find((book) => book.isbn === isbn);
  }
  borrowBook(isbn, memberId) {
    const member = this.#members.find((m) => m.memberId === memberId);
    const book = this.#books.find((b) => b.isbn === isbn);
    member.borrowBook(book);
  }
  returnBook(isbn, memberId) {
    const member = this.#members.find((m) => m.memberId === memberId);
    const book = this.#books.find((b) => b.isbn === isbn);
    member.returnBook(book);
  }
  listAvailableBooks() {
    const availableBooks = this.#books.filter((book) => book.isAvailable);
    console.log(availableBooks);
  }
}
