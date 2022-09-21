def RemDuplicates(arr, a):
    if a == 0 or a == 1:
        return a

    temp = list(range(a))

    p = 0;
    for q in range(0, a-1):

        if arr[q] != arr[q+1]:
            temp[p] = arr[q]
            p += 1

    temp[p] = arr[a-1]
    p += 1

    for q in range(0, p):
        arr[q] = temp[q]

    return p 

arr = [2,3,4,5,6,7,8,8]
a = len(arr)

a = RemDuplicates(arr, a)
print(a)