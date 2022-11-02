def max_product(nums)
    min = max = 1
    best = nums[0]

    nums.each do |n|
        min, max = [n, min*n, max*n].minmax
        best = [best, max].max
    end

    best
end