//? -------------1-------------
// const urls = [
//   fetch('https://jsonplaceholder.typicode.com/users/1'),
//   fetch('https://jsonplaceholder.typicode.com/users/2'),
//   fetch('https://jsonplaceholder.typocode.com/users/3'),
// ];
// const data = await Promise.allSettled(urls);
// console.log(data);

//? -------------3-------------
// Promise.allSettled = myAllSettled;
// function myAllSettled(arr) {
//   if (!arr.length) return Promise.resolve([]);
//   const pArr = arr.map((p) => {
//     if (!(p instanceof Promise)) return new Promise((res) => res(p));
//     return p;
//   });

//   const values = Promise.all(
//     pArr.map((p) =>
//       p.catch((err) => {
//         return { status: 'rejected', reason: err };
//       })
//     )
//   ).then((res) =>
//     res.map((value) => (value.status === 'rejected' ? value : { status: 'fulfilled', value }))
//   );

//   return values;
// }
// function myAllSettled(promises) {
//   if (!promises.length) return Promise.resolve([]);

//   const wrapped = promises.map((p) =>
//     Promise.resolve(p) // ensures non-promises are wrapped
//       .then((value) => ({ status: 'fulfilled', value }))
//       .catch((reason) => ({ status: 'rejected', reason }))
//   );

//   return Promise.all(wrapped);
// }

// const start = performance.now();
// const data = await Promise.allSettled([
//   fetch('https://jsonplaceholder.typicode.com/users/1'),
//   fetch('https://jsonplaceholder.typicode.com/users/2'),
//   fetch('https://jsonplaceholder.typocode.com/users/3'),
// ]);
// const end = performance.now();
// console.log(data, `Elapsed: ${(end - start).toFixed(2)} ms`);

//? -------------5-------------
// async function batchFetch(urls, batchSize) {
//   const iterations = Math.ceil(urls.length / batchSize);
//   const result = [];
//   for (let i = 0; i < iterations; i++) {
//     console.log(`Fetching data for batch ${i + 1} ...`);
//     const res = await Promise.allSettled(
//       urls.slice(i * batchSize, (i + 1) * batchSize).map((url) => fetch(url))
//     );
//     result.push(...res);
//   }
//   return result;
// }
// const urls = [
//   'https://jsonplaceholder.typicode.com/users/1',
//   'https://jsonplaceholder.typicode.com/users/2',
//   'https://jsonplaceholder.typicode.com/users/3',
//   'https://jsonplaceholder.typocode.com/users/4',
//   'https://jsonplaceholder.typicode.com/users/5',
//   'https://jsonplaceholder.typocode.com/users/6',
//   'https://jsonplaceholder.typicode.com/users/7',
//   'https://jsonplaceholder.typicode.com/users/8',
//   'https://jsonplaceholder.typocode.com/users/9',
//   'https://jsonplaceholder.typicode.com/users/10',
//   'https://jsonplaceholder.typicode.com/users/11',
//   'https://jsonplaceholder.typicode.com/users/12',
//   'https://jsonplaceholder.typocode.com/users/13',
//   'https://jsonplaceholder.typicode.com/users/14',
// ];
// const data = await batchFetch(urls, 4);
// console.log(data);

//? -------------Mini-project-------------
const delay = async (ms) => {
  return new Promise((res) => setTimeout(res, ms));
};

async function userPostsAggregator(urls, batchSize = 3) {
  const iterations = Math.ceil(urls.length / batchSize);
  const result = [];
  for (let i = 0; i < iterations; i++) {
    if (i !== 0) await delay(200);
    console.log(`Fetching data for batch ${i + 1} ...`);
    const batch = urls.slice(i * batchSize, (i + 1) * batchSize);
    const res = await Promise.all(
      batch.map((url) =>
        fetch(url)
          .then((user) => user.json())
          .then((user) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
              .then((posts) => posts.json())
              .then((posts) => {
                return { user, postsCount: posts.length };
              });
          })
          .catch(() => {
            return { id: url.split('/').at(-1), error: true };
          })
      )
    );
    result.push(...res);
  }
  return result;
}

const urls = [
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceholder.typicode.com/users/3',
  'https://jsonplaceholder.typocode.com/users/4',
  'https://jsonplaceholder.typicode.com/users/5',
  'https://jsonplaceholder.typocode.com/users/6',
  'https://jsonplaceholder.typicode.com/users/7',
  'https://jsonplaceholder.typicode.com/users/8',
  'https://jsonplaceholder.typocode.com/users/9',
  'https://jsonplaceholder.typicode.com/users/10',
];
const data = await userPostsAggregator(urls);
console.log(data);
