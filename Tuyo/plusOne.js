/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    /*
    First we create a variable to store the length of the array
    */
    let j = digits.length

    /*
    create a loop that looks through the array from the last index
    to the first index
    */ 
    for (let i = j - 1; i >= 0; i--) {

        /*
        write an if statement to check if the number at the current index
        is smaller than 9
        */
        if (digits[i] < 9) {

            /*
            if the number is smaller than 9, add one to the number and return
            the incremented array
            */
            digits[i]++
            return digits
        }

        // if the number is larger than 9, set it to zero
        digits[i] = 0
    }

    /*
    create a variable newNum and increase the size of the array by 1
    and also assign 1 to the 0th index, if the number is larger than
    9. Then return the newNum
    */
    let newNum = new digits[j + 1]
    newNum[0] = 1
    return newNum
};