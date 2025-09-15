// import { NetworkError } from './ApiErrors/NetworkError.js';

//? -------------1-------------
// try {
//   const data = await fetch('https://jsonplaceholder.typicode.com/users/2');
//   console.log(data);
// } catch (err) {
//   console.error(err.message);
// }

//? -------------2-------------
// try {
//   const data = await fetch('https://jsonplaceholder.typicode.com/usrs/2');
//   if (data.status !== 200) throw new NetworkError(data.status, 'Network error occurred');
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }

//? -------------3-------------
// try {
//   const data = await fetch('https://jsonplaceholder.typocode.com/users/2');
//   if (data.status !== 200) throw new Error('HTTP Error');
//   console.log(await data.json());
// } catch {
//   console.log({ name: 'Guest' });
// }

//? -------------4-------------
// const urls = [
//   'https://jsonplaceholder.typicode.com/users/1',
//   'https://jsonplaceholder.typcode.com/users/2',
//   'https://jsonplaceholder.typicode.com/users/3',
// ];

// Promise.all(urls.map((url) => fetch(url)))
//   .then((data) =>
//     Promise.all(
//       data.map((res) => {
//         if (res.status !== 200) throw new Error(`HTTP Error : ${res.status}`);
//         return res.json();
//       })
//     )
//   )
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err.message));

// Promise.allSettled(urls.map((url) => fetch(url))).then((data) => console.log(data));

//? -------------5-------------
// const delay = (ms) => {
//   return new Promise((res) => setTimeout(res, ms));
// };

// async function retryFetch(url, retries, ms) {
//   const exp = 2;
//   try {
//     const res = await fetch(url);
//     if (res.status !== 200) throw new Error(`HTTP Error : ${res.status}`);
//     return res.json();
//   } catch (err) {
//     if (retries > 0) {
//       await delay(ms);
//       console.warn('Request failed!! Retrying ......');
//       return retryFetch(url, retries - 1, ms * exp);
//     } else {
//       throw err;
//     }
//   }
// }

// try {
//   const data = await retryFetch('https://jsonplaceholder.tyicode.com/users/1', 3, 1000);
//   console.log(data);
// } catch (e) {
//   console.error(e.message);
// }

//? -------------7-------------
// try {
//   const arr = [1, 2];
//   console.log(arr[10] * y);
// } catch (err) {
//   console.error(err);
//   // throw err;
// }

//? -------------Mini-project-------------
function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

async function fetchUserApi(userId, retries, wait = 1000) {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const backoffFactor = 2;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('HTTP Error');
    return res.json();
  } catch {
    if (retries > 0) {
      await delay(wait);
      return fetchUserApi(userId, retries - 1, wait * backoffFactor);
    } else return { id: userId, error: true };
  }
}

async function robustDataLoader(userIds) {
  // const result = [];
  // for (let userId of userIds) {
  //   const res = await fetchUserApi(userId, 2);
  //   result.push(res);
  // }
  // return result;
  return Promise.all(userIds.map((userId) => fetchUserApi(userId, 2)));
}
const start = performance.now();
const result = await robustDataLoader([1, 200, 3]);
const end = performance.now();
console.log(result, `Elapsed: ${(end - start).toFixed(2)} ms`);
