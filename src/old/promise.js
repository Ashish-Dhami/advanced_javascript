const prom1 = Promise.resolve("first resolved");
const prom2 = "second resolved";
const prom3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("third resolved");
  }, 3000);
});
const promiseArr = [prom1, prom2, prom3];

const any = (promiseArray) => {
  console.log("hello");
};
Promise.any = any;

Promise.any(promiseArr);
