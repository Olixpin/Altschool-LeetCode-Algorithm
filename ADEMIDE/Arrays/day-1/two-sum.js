function TwoSum(array, sum){
    let number = []
    
    let prevNumber = []

    for(let x in array){
        for(let y in array){
            if (array[x] + array[y] === sum){
                if(!!number.length){ 
                    if (!prevNumber.includes(array[x]) && !prevNumber.includes(array[y])) {
                        prevNumber.push(array[x])
                        number.push([array[x], array[y]])
                    } 
                } else {
                    number.push([array[x], array[y]])
                    prevNumber.push(array[x])
                }
            }
        }
    }
   return number;
}

let array = [2, 3, 4, 3, 6, 7]
let sum = 6
TwoSum(array, sum);