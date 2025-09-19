//? ------------1------------
// console.log('A');
// setTimeout(() => console.log('B'), 0);
// Promise.resolve().then(() => console.log('C'));
// console.log('D');

//? ------------2------------
// console.log('A');
// setTimeout(() => console.log('B'), 0);
// for (let i = 0; i < 10000; i++) Promise.resolve().then(() => console.log('C - ', i));
// console.log('D');

//? ------------4------------
// setTimeout(() => console.log('T1'), 0);
// Promise.resolve().then(() => {
//   console.log('P1');
//   setTimeout(() => console.log('T2'), 0);
// });
// console.log('S1');

//? ------------5------------
// setTimeout(() => console.log('async macrotask executed'), 0);
// Promise.resolve().then(() => console.log('async microtask executed'));
// for (let i = 0; i < 1e9; i++) {
//   if (i === 1e9 - 1) console.log('sync task completed');
// }

//? ------------Mini-project------------
const timeline = [];
timeline.push('Sync: Start');
setTimeout(() => timeline.push('Macrotask: Timeout'));
timeline.push('Sync: Middle');
Promise.resolve().then(() => timeline.push('Microtask: Promise then'));
timeline.push('Sync: End');
setTimeout(() => {
  console.log('Execution order:');
  timeline.forEach((task, i) => console.log(`${i + 1}. ${task}`));
}, 2000);
