function fibonacci(n, arr = [], index = 0) {
  if (index >= n) {
    return arr;
  }

  if (index === 0) {
    arr.push(0);
  } else if (index === 1) {
    arr.push(1);
  } else {
    arr.push(arr[index - 1] + arr[index - 2]);
  }

  return fibonacci(n, arr, index + 1);
}

const fibonacciSeries = fibonacci(6);
console.log(fibonacciSeries);
