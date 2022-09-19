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
        
        if (i == 0) {
            digits.unshift(1)
        }
    }
    return digits
};
