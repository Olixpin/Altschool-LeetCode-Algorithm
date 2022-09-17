let arr = [
  "one",
  "two",
  "two",
  "three",
  "three",
  "three",
  "four",
  "four",
  "four",
  "four",
  "five",
  "five",
  "five",
  "five",
  "five",
  "six",
  "six",
  "six",
  "six",
  "six",
  "six",
];

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(arr));
