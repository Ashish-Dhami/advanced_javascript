// // * 2
function getUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Fetched user:', userId);
      resolve({ id: userId, name: 'Ashish' });
    }, 1000);
  });
}

function getPosts(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Fetched posts for:', user.name);
      resolve([
        { id: 1, title: 'First Post' },
        { id: 2, title: 'Second Post' },
      ]);
    }, 1000);
  });
}

function getComments(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Fetched comments for:', post.title);
      resolve([
        { id: 101, text: 'Great post!' },
        { id: 102, text: 'Thanks for sharing!' },
      ]);
    }, 1000);
  });
}

// getUser(1)
//   .then((user) => getPosts(user))
//   .then((posts) => getComments(posts[0]))
//   .then((comments) => console.log('Final Comments:', comments))
//   .catch((err) => console.error(err.message));

try {
  const user = await getUser(1);
  const posts = await getPosts(user);
  const comments = await getComments(posts[0]);
  console.log('Final Comments:', comments);
} catch (err) {
  console.error(err.message);
}

// // * 3
// const num = 3;
// new Promise((res, rej) => {
//   res(num ** 2);
// })
//   .then((num) => {
//     return num * 2;
//   })
//   .then((num) => {
//     console.log(num + 5);
//   });

// // * 4
// const p = new Promise((res, rej) => {
//   if (Math.random() > 0.5) res('Promise resolved');
//   else rej('Promise rejected');
// });
// p.then((data) => console.log(data)).catch((err) => console.error(err));

// // * 5
// Promise.all([
//   fetch('https://jsonplaceholder.typicode.com/todos/1'),
//   fetch('https://jsonplaceholder.typicode.com/todos/2'),
//   fetch('https://jsonplaceholder.typicode.com/todos/3'),
// ])
//   .then((data) => Promise.all(data.map((todo) => todo.json())))
//   .then((data) => data.forEach((todo) => console.log(todo)));

// // * 6
// const p1 = new Promise((resolve) => {
//   setTimeout(() => resolve('p1'), 2000);
// });
// const p2 = new Promise((resolve) => {
//   setTimeout(() => resolve('p2'), 1000);
// });
// Promise.race([p1, p2]).then((data) => console.log(`${data} finished first`));

// // * 7
// const p1 = Promise.resolve('1');
// const p2 = Promise.resolve('2');
// const p3 = Promise.reject('3');
// Promise.allSettled([p1, p2, p3]).then((data) => data.forEach((status) => console.log(status)));

// // * 8
// const p1 = new Promise((resolve) => {
//   setTimeout(() => resolve('1'), 1000);
// });
// const p2 = new Promise((resolve) => {
//   setTimeout(() => resolve('2'), 2000);
// });
// const p3 = new Promise((resolve) => {
//   setTimeout(() => resolve('3'), 300);
// });
// Promise.any([p1, p2, p3]).then((data) => console.log(`Promise ${data} wins`));
