// import { delay } from '../../W1/D4.js';

// //* 2
// const fetchUsers = async (usersUrl) => {
//   const usersData = await Promise.all(usersUrl.map((url) => fetch(url)));
//   const users = await Promise.all(usersData.map((user) => user.json()));
//   return users;
// };
// console.log(
//   await fetchUsers([
//     'https://jsonplaceholder.typicode.com/users/1',
//     'https://jsonplaceholder.typicode.com/users/2',
//     'https://jsonplaceholder.typicode.com/users/3',
//   ])
// );

// //* 3
// async function retryFetch(url, retries = 0) {
//   try {
//     const res = await fetch(url);
//     if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//     return res.json();
//   } catch (err) {
//     if (retries > 0) {
//       console.warn('Request failed!! Retrying...');
//       return retryFetch(url, retries - 1);
//     } else {
//       console.error('Retries exhausted!!');
//       throw err;
//     }
//   }
// }

// try {
//   const data = await retryFetch('https://jsonplaceholder.typicode.com/users/1', 2);
//   console.log(data);
// } catch (err) {
//   console.error(err.message);
// }

// //* 4
// async function fetchWithTimeout(url, ms) {
//   const timeoutPromise = new Promise((_, rej) => {
//     setTimeout(() => rej(new Error('Request timed out!!')), ms);
//   });
//   const response = await Promise.race([fetch(url), timeoutPromise]);
//   if (!response.ok) throw new Error(`HTTP Error : ${response.status}}`);
//   return response.json();
// }

// try {
//   const data = await fetchWithTimeout('https://jsonplaceholder.typicode.com/users/1', 1000);
//   console.log(data);
// } catch (err) {
//   console.error(err.message);
// }

// //* 5
// const fetchWithGap = async (urls, gapInMs) => {
//   for (let url of urls) {
//     const user = await fetch(url).then((res) => res.json());
//     console.info(`Fetched user ${user.name} : ${JSON.stringify(user)}`);
//     await delay(gapInMs);
//   }
// };
// fetchWithGap(
//   [
//     'https://jsonplaceholder.typicode.com/users/1',
//     'https://jsonplaceholder.typicode.com/users/2',
//     'https://jsonplaceholder.typicode.com/users/3',
//   ],
//   2000
// );

// //* 6
// const incorrectUrl = 'https://jsonholder.typicode.com/users/2';
// try {
//   const res = await fetch(incorrectUrl);
//   if (!res.ok) throw new Error(`HTTP Error : ${res.status}`);
//   console.log(await res.json());
// } catch (err) {
//   console.log(err.message);
// }

//* Mini-project
const asyncDataFetcherSequential = async (userIds) => {
  const results = [];

  for (const id of userIds) {
    // Fetch user
    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
      res.json()
    );

    // Fetch posts for that user
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`).then(
      (res) => res.json()
    );

    const firstPost = posts[0];

    // Fetch comments for the first post
    const comments = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${firstPost.id}`
    ).then((res) => res.json());

    // Build object
    const userObj = {
      id: user.id,
      name: user.name,
      posts: [
        {
          id: firstPost.id,
          title: firstPost.title,
          comments,
        },
      ],
    };

    results.push(userObj);
    console.log(userObj); // log after each user is done
  }

  return results;
};

asyncDataFetcherSequential([1, 2, 3]);
