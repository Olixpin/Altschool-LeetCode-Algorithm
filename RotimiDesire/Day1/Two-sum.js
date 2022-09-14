function twoSum(ints, result) {
  for (let a = 0; a < ints.length; a++) {
    for (let b = a + 1; b < ints.length; b++) {
      if (ints[a] + ints[b] === result) {
        return [a, b];
      }
    }
  }
}

console.log(twoSum([1, 5], 6));
