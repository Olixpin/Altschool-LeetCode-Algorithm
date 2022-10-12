/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    
    /*
    check our base case to see if numRows is less than 1
    if it is, we return an empty array, and if it is strictly
    equal to 1, we return that [1] array
    */
    if(numRows < 1) return []
    if(numRows === 1) return [[1]]

    /*
    next, we set up our triangle
    */
    const triangle = [[1]]

    /*
    create our loops
    */
    for(let i = 1; i < numRows; i++) {

        /*
        we need access to our previous row, to generate a new
        row
        */
        let previousRow = triangle[i - 1]
        const currRow = []

        currRow.push(1)

        /*
        iterate over the next row and use the previous row
        to calculate the values
        */
        for (let j = 1; j < previousRow.length; j++) {
            currRow[j] = previousRow[j] + previousRow[j - 1]
        }

        /*
        when the loop is complete, we want to push a 1 to
        the end of the array, then take this row and push
        it to our triangle to update the values
        */
        currRow.push(1)
    }

    return triangle
};