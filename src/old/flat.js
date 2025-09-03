Array.prototype.flat = flat;
function flat(level = 1) {
  let newArr = arguments[1] ?? [];
  this.map((elem) => {
    if (level && elem instanceof Array) {
      flat.call(elem, level - 1, newArr);
    } else {
      newArr.push(elem);
    }
  });
  return newArr;
}

const array = [1, 2, [3], 4, [5, 6, [6, [7, "dhami"]], ["ashish"]]];

try {
  console.log("flattenedArray >>", array.flat(2));
} catch (e) {
  console.error(e.message);
}
//O(M*N)
// where M = Math.min(level, no. of nested arrays)
// N = generic length
