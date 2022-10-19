var findDisappearedNumbers = function(nums) {
    let missing = [];
    let set = new Set();
    for (let num of nums) {
       if (!set.has(num)) set.add(num);
    }
    let n = 1;
    while (n <= nums.length) {
        if (!set.has(n)) missing.push(n);
        n++;
    }
    return missing;
};