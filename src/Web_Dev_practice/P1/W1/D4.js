function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// await delay(2000);
// console.log("Hello after 2 seconds");

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((result) => result.json())
//   .then((res) => console.log(res));

// async function fetchJSON(url) {
//   const res = await fetch(url);
//   const resBody = await res.json();

//   console.log(resBody);
// }
// fetchJSON("https://jsonplaceholder.typicode.com/todos/1");

// async function fetchTodos(n) {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const resBody = await res.json();
//   resBody.slice(0, n).forEach((obj) => {
//     console.log(obj.title);
//   });
// }
// fetchTodos(3);

export { delay };
