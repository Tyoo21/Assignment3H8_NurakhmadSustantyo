// Exercise 1
function isArithmeticProgression(numbers){
    const diff = numbers[1] - numbers[0]

    for (let i = 2; i < numbers.length; i++) {
        if (numbers[i] - numbers[i - 1] != diff){
            return false
        } 
    }
    return true
}

const deret1 = [2,4,6,8,10,12]
const deret2 = [1,2,3,4,5,6]
const deret3 = [1,3,6,7]

console.log(isArithmeticProgression(deret1), "===> Exercise 1");
console.log(isArithmeticProgression(deret2), "===> Exercise 1");
console.log(isArithmeticProgression(deret3), "===> Exercise 1");


// Exercise 2
function threeStepAB(text){
    const idxA = text.indexOf('a')
    const idxB = text.indexOf('b', idxA + 1)

    if (idxA !== -1 && idxB !== -1 && idxB - idxA >= 3){
        return true
    } else{
        return false
    }
}

const text1 ="beli bakso"
const text2 ="baca buku"
const text3 ="baca"

console.log(threeStepAB(text1), "===> Exercise 2");
console.log(threeStepAB(text2), "===> Exercise 2");
console.log(threeStepAB(text3), "===> Exercise 2");


// Exercise 3
function sumArray(arr, int){
    const numSet = new Set(arr)
    const result = []

    for(let num of arr){
        const complement = int - num

        if(numSet.has(complement)){
            result.push([num, complement])
            
            arr[arr.indexOf(num)] = undefined
            arr[arr.indexOf(complement)] = undefined
        }
    }
    return result
}

// const inputArray = [4, 5, 3, 2]
// const intSum = 7

// const resultArray = sumArray(inputArray, intSum)
// console.log(resultArray, "===> Exercise 3");


// Exercise 4
function arrSum(arr){
    let max = Number.NEGATIVE_INFINITY
    let current = 0
    let start = 0
    let end = 0
    let startIdx = 0

    for (let i = 0; i < arr.length; i++) {
        current += arr[i]

        if(current > max){
            max = current
            start = startIdx
            end = i
        }

        if(current < 0){
            current = 0
            startIdx = i + 1
        }
    }

    const maxSubArray = arr.slice(start, end + 1)
    return [maxSubArray, max]
}

const inputArray = [-2, -3, 5, -4, -1, 1, 6, -6]
const [maxSubArray, max] = arrSum(inputArray)

console.log("Sub Array: ", maxSubArray);
console.log("Sum: ", max);