function mergesort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const sortedleft = mergesort(left);
  const sortedright = mergesort(right);

  return merge(sortedleft, sortedright);
}

function merge(left, right) {
  const result = [];
  if (left[0] <= right[0]) {
    result.push(left.shift());
  } else {
    result.push(right.shift());
  }

  return result.concat(left, right);
}

const arr = [4, 8, 2, 1, 5, 10, 7];
console.log("before sorting : " + arr);
const sortedArr = mergesort(arr);
console.log("After sorting : " + sortedArr);
