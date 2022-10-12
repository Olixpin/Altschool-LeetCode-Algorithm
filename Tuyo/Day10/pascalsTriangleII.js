/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {

    /*
    first we want to create the triangle where we will push
    our arrays. It should be empty
    */
    let triangle = [];

    /*
    create a loop that will check if the value of i is less
    than or equal the value of the rowIndex and increment it
    till it is out of bounds
    */
    for (let i = 0; i <= rowIndex; i++) {

        /*
        set the ith index of triangle to the an empty array
        and after increment, set the 0th index of i to 1
        */
        triangle[i] = [];

        triangle[i][0] = 1;

        /*
        iterate over the arrays in the triangle and calculate
        the value of the triangle at that index.
        */

        for (let j = 1; j < i; j++) {

            triangle[i][j] = triangle[i - 1][j - 1] 
                                + triangle[i - 1][j];

        }

        /*
        set the value of the triangle at ith index of i to
        1.
        */
        triangle[i][i] = 1;
    }

    return triangle[rowIndex];
};