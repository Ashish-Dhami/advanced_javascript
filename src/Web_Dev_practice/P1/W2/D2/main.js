// import { getUser, getPosts, getComments, delay } from './api.js';

// // Sequential chain: User → Posts → Comments
// getUser(1)
//   .then((user) => {
//     console.log('User:', user.name);
//     return getPosts(user.id);
//   })
//   .then((posts) => {
//     console.log(`Fetched ${posts.length} posts`);
//     // Fetch comments for the first post
//     return getComments(posts[0].id);
//   })
//   .then((comments) => {
//     console.log('Comments on first post:', comments.length);
//   })
//   .catch((err) => console.error('Error:', err.message))
//   .finally(() => console.log('Done with sequential fetch'));

// // Parallel fetch: multiple users at once
// Promise.all([getUser(1), getUser(2), getUser(3)])
//   .then((users) => {
//     console.log('Fetched users in parallel:');
//     users.forEach((u) => console.log('-', u.name));
//   })
//   .catch(console.error);

//* 1
// Promise.all([getUser(1), getUser(2), getUser(3)])
//   .then((users) => {
//     return Promise.all(users.map((user) => getPosts(user.id)));
//   })
//   .then((posts) => console.log(posts));

//* 2
// Promise.race([getUser(1), getUser(2), getUser(3)]).then((data) =>
//   console.log(`Fastest user is ${data.name}`)
// );

//* 3
// Promise.allSettled([getUser(1), getUser(9999), getUser(2)]).then((data) => {
//   data.forEach((statusObj, i) => console.log(`User ${i + 1} fetch result : ${statusObj.status}`));
// });

//* 4
// const postTitles = [];
// getPosts(2)
//   .then((posts) =>
//     Promise.all(
//       posts.map((post) => {
//         postTitles.push(post.title);
//         return getComments(post.id);
//       })
//     )
//   )
//   .then((commentsData) => {
//     commentsData.forEach((comments, i) =>
//       console.log({ postTitle: postTitles[i], commentCount: comments.length })
//     );
//   });

//* 5
// function fetchWithTimeout(url, ms) {
//   let timeoutId;

//   const timeoutPromise = new Promise((_, reject) => {
//     timeoutId = setTimeout(() => reject(new Error('Request timed out!!')), ms);
//   });

//   return Promise.race([fetch(url), timeoutPromise]).then((res) => {
//     clearTimeout(timeoutId);
//     if (!res.ok) throw new Error(`HTTP error : ${res.status}`);
//     return res.json();
//   });
// }

// fetchWithTimeout('https://jsonplaceholder.typicode.com/users/1', 700)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err.message));

//* 6
// function fetchUsersWithDelay(ids, ms) {
//   let chain = Promise.resolve();
//   for (const id of ids) {
//     chain = chain
//       .then(() => getUser(id))
//       .then((user) => {
//         console.log(`fetched user ${id} : ${JSON.stringify(user)}`);
//         return delay(ms);
//       })
//       .then(() => console.log('api call ended'));
//   }
// }

// fetchUsersWithDelay([1, 2, 3], 2000);

//* 7
// function retryFetch(url, retries = 0) {
//   return fetch(url)
//     .then((res) => {
//       if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//       return res.json();
//     })
//     .catch((err) => {
//       if (retries > 0) {
//         console.warn('Request failed. Retrying...');
//         return retryFetch(url, retries - 1);
//       } else {
//         console.error("Couldn't fetch api!! Retries exhausted");
//         throw err;
//       }
//     });
// }

// retryFetch('https://jsonplaceholder.typicode.com/users/1', 2)
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.error('Final error:', err.message);
//   });
