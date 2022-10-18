# @param {Integer[]} nums
# @return {Integer[]}

def product_except_self(nums)
    res = [1] * nums.size

    prefix = 1
    for i in 0..nums.length-1
        res[i] *= prefix
        prefix *= nums[i]
    end
    
    postfix = 1
    for i in (0..nums.length-1).to_a.reverse
        res[i] *= postfix
        postfix *= nums[i]
    end
    
    return res
end
