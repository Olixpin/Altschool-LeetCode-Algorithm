let arr = [];
let k;

function search(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return i;
    } else {
      if (arr[i] < k) {
        arr.push(k);
      } else {
        arr.unshift(k);
      }
    }
  }
}

search([1, 2, 3, 5, 6, 7], 4);
