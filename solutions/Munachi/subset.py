def subsetsWithDup(nums):
    result = [[]]
    for i in nums:
        for j in range(len(result)):
            x = result[j][:]
            x.append(i)
            x.sort()
            if x not in result:
                result.append(x)
            else:
                continue
    return result