// function createCounter() {
//   let c = 0;
//   return {
//     increment: function () {
//       c += 1;
//       return c; // direct return
//     },
//     reset: function () {
//       c = 0;
//       return c; // direct return
//     },
//   };
// }

// const counter = createCounter();
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.increment());

// const obj = {
//   name: "ashish",
//   method1: function () {
//     return this?.name;
//   },
//   method2: () => {
//     return this?.name;
//   },
// };
// console.log(obj.method1());
// console.log(obj.method2());

// function makeMultiplier(multiplier) {
//   return function multiply(input) {
//     return multiplier * input;
//   };
// }
// const double = makeMultiplier(2);
// console.log(double(5)); // 10

// const obj2 = {
//   name: "ashish",
//   logLater: function () {
//     setTimeout(function () {
//       console.log("Normal fn this:", this.name);
//     }, 500);

//     setTimeout(() => {
//       console.log("Arrow fn this:", this.name);
//     }, 500);
//   },
// };

// obj2.logLater();

// function createPassword(secret) {
//   return {
//     check: function (password) {
//       return password === secret;
//     },
//     change: function (newPassword) {
//       secret = newPassword;
//     },
//   };
// }
// const pwd = createPassword("2001");
// console.log(pwd.check("2001"));
// pwd.change("2002");
// console.log(pwd.check("2002"));

// function once(fn) {
//   let called = false;
//   return () => {
//     if (!called) {
//       called = true;
//       fn();
//     } else return;
//   };
// }

// const newFn = once(() => {
//   console.log("hello world");
// });
// newFn();
// newFn();
// newFn();
// newFn();

// const obj1 = {
//   name: "ashish",
//   getName: function () {
//     return this.name;
//   },
// };
// const obj2 = { name: "dhami" };
// console.log(obj1.getName());
// console.log(obj1.getName.call(obj2));

const obj1 = {
  name: "ashish",
  sayName: function () {
    console.log(this.name);
  },
};
const var1 = obj1.sayName.bind(obj1);
var1();

const obj = {
  name: "ashish",
  method1() {
    setTimeout(function () {
      console.log(this);
    }, 500);
  },
  method2() {
    setTimeout(() => {
      console.log(this);
    }, 500);
  },
};
obj.method1();
obj.method2();
