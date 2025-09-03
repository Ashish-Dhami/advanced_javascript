//* DRILLS

//* Q1
// function doTask(callback) {
//   setTimeout(() => callback(), 1000);
// }

// // Example usage:
// doTask(() => {
//   console.log('Task finished!');
// });

//* Q2
// function doTask(message, callback) {
//   console.log(message);
//   setTimeout(() => callback(), 1000);
// }

// // Example:
// doTask('Downloading file...', () => {
//   console.log('Download complete!');
// });

//* Q3
// function step1(callback) {
//   setTimeout(() => {
//     console.log('Step 1 done');
//     callback();
//   }, 1000);
// }

// function step2(callback) {
//   setTimeout(() => {
//     console.log('Step 2 done');
//     callback();
//   }, 1000);
// }

// function step3(callback) {
//   setTimeout(() => {
//     console.log('Step 3 done');
//     callback();
//   }, 1000);
// }

// // Call them in sequence
// step1(() => {
//   step2(() => {
//     step3(() => {
//       console.log('All done');
//     });
//   });
// });

//* Q4
// Simulated async functions
// function getUser(userId, callback) {
//   setTimeout(() => {
//     console.log('Fetched user:', userId);
//     callback({ id: userId, name: 'Ashish' });
//   }, 1000);
// }

// function getPosts(user, callback) {
//   setTimeout(() => {
//     console.log('Fetched posts for:', user.name);
//     callback([
//       { id: 1, title: 'First Post' },
//       { id: 2, title: 'Second Post' },
//     ]);
//   }, 1000);
// }

// function getComments(post, callback) {
//   setTimeout(() => {
//     console.log('Fetched comments for:', post.title);
//     callback([
//       { id: 101, text: 'Great post!' },
//       { id: 102, text: 'Thanks for sharing!' },
//     ]);
//   }, 1000);
// }

// // ---- Callback Hell starts here ----
// getUser(1, (user) => {
//   getPosts(user, (posts) => {
//     getComments(posts[0], (comments) => {
//       console.log('Final Comments:', comments);
//     });
//   });
// });

//* Q5
// function readFile(filename, callback) {
//   setTimeout(() => {
//     console.log(`Read file: ${filename}`);
//     callback();
//   }, 1000);
// }

// readFile('file1.txt', () => {
//   readFile('file2.txt', () => {
//     readFile('file3.txt', () => {
//       readFile('file4.txt', () => {
//         console.log('All files read!');
//       });
//     });
//   });
// });

//* Mini-project
function placeOrder(callback) {
  // 1s delay
  setTimeout(() => {
    console.log('order placed');
    callback();
  }, 1000);
}

function processPayment(callback) {
  // 2s delay
  setTimeout(() => {
    console.log('payment processed');
    callback();
  }, 2000);
}

function prepareFood(callback) {
  // 2s delay
  setTimeout(() => {
    console.log('food prepared');
    callback();
  }, 2000);
}

function deliverFood(callback) {
  // 1s delay
  setTimeout(() => {
    console.log('food delivered');
    callback();
  }, 1000);
}

// Final call
placeOrder(() => {
  processPayment(() => {
    prepareFood(() => {
      deliverFood(() => {
        console.log('Order complete!');
      });
    });
  });
});
