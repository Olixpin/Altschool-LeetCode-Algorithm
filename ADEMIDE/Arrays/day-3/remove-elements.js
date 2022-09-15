let removeElement = (array, n) => {
    let newArray = [];
   
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== n) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  };
   
  let passed_in_array = [1, 2, 3, 4, 5];
  let element_to_be_removed = 2;
  let result = removeElement(passed_in_array, element_to_be_removed);
   
  console.log("Remaining elements: " + result);