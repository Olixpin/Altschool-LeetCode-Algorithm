# @param {Integer[]} nums
# @return {Boolean}

def contains_duplicate(nums)
    hashset = Set.new

    for num in nums
        if hashset.include?(num)
            return true
        end
        hashset.add(num)
    end
    return false
end