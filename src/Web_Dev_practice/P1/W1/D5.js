import { delay } from './D4.js';

// async function retryFetch(url, retries) {
//   let response;
//   try {
//     response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return await response.json();
//   } catch (error) {
//     if (retries > 0) {
//       console.warn("Api fetch call failed!! Trying again...");
//       return retryFetch(url, retries - 1);
//     } else {
//       console.error("Couldn't fetch api!! Retries exhausted");
//       throw error;
//     }
//   }
// }
// try {
//   const result = await retryFetch(
//     "https://jsonplaeholder.typicode.com/todos/1", // wrong url
//     2
//   );
//   console.log(result);
// } catch (err) {
//   console.error("Final error:", err.message);
// }

// async function fetchJSON(url) {
//   const res = await fetch(url);
//   if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//   return res.json();
// }

// (async function chainFetch() {
//   try {
//     const user = await fetchJSON(
//       "https://jsonplaceholder.typicode.com/users/1"
//     );
//     console.log(user);

//     const posts = await fetchJSON(
//       "https://jsonplaceholder.typicode.com/users/1/posts"
//     );
//     console.log(posts);
//   } catch (error) {
//     console.error(error.message);
//   }
// })();

// Promise.all([
//   fetch("https://jsonplaceholder.typicode.com/todos/1"),
//   fetch("https://jsonplaceholder.typicode.com/todos/2"),
//   fetch("https://jsonplaceholder.typicode.com/todos/3"),
// ])
//   .then((responses) => Promise.all(responses.map((res) => res.json())))
//   .then((todos) => todos.forEach((todo) => console.log(todo.title)))
//   .catch((err) => console.error(err));

// function fetchWithTimeout(url, ms = 0) {
//   let timeoutId;
//   return Promise.race([
//     fetch(url),
//     new Promise((_, reject) => {
//       timeoutId = setTimeout(
//         () => reject(new Error("Request timed out!!")),
//         ms
//       );
//     }),
//   ]).then((res) => {
//     clearTimeout(timeoutId);
//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }
//     return res.json();
//   });
// }

// (async () => {
//   try {
//     const data = await fetchWithTimeout(
//       "https://jsonplaceholder.typicode.com/todos/1",
//       1000
//     );
//     console.log(data);
//   } catch (error) {
//     console.error(error.message);
//   }
// })();

async function fetchWithDelay(urls, delayInMs) {
  for (const url of urls) {
    const res = await fetch(url);
    const json = await res.json();
    console.info(json);

    await delay(delayInMs); // wait before next fetch
  }
}

const arr = [
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceholder.typicode.com/users/3',
];

fetchWithDelay(arr, 2000);
