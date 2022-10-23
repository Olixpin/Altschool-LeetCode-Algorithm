var generate = function(numRows) {
  if (numRows<1) return[];
  if (numRows === 1) return [[1]];
   const triangle = [[1]];
  
  for(let i = 1; i < numRows; i++){
      const oldRow = triangle[i - 1]; 
      const newRow = [];

      newRow.push(1);

      for(let j =1 ; j< oldRow.length; j++){
        newRow[j] = oldRow[j] + oldRow[j - 1]; 
      }

    newRow.push(1);

    triangle.push(newRow);

  
  }
  return triangle;
   
};