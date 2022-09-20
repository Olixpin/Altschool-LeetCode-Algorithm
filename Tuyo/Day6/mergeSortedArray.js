/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    /*
    create a variable that stores the value of m-1, and
    another that sores the values the value of n-1 also.
    create a variable to store the value of m + n - 1 
    */
    let a = m - 1
    let b = n - 1
    let i = m + n - 1

    /*
    create a while loop that checks if the value of b is
    greater than or equal to 0 and compare it to the value
    of a to see which is greater
    */
    while (b >= 0) {
        let a2 = nums1[a]
        let b2 = nums2[b]

        /*
        use an if statement to check if a2 is greater than
        b2 and set the value of nums1 at i (nums1[i]) to the
        value of a2, then decrement i and decrement a
        */
        if (a2 > b2) {
            nums1[i] = a2
            i--
            a--
        } else {
            /*
            set the value of nums1 at i (nums1[i]) to the
            values of b2, and decrement i and b
            */
           nums1[i] = b2
           i--
           b--
        }
    }
};