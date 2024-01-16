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
    return /a...b|b...a/.test(text)
}

console.log(threeStepAB("i am sick"), "===> Exercise 2 text 1");
console.log(threeStepAB("you are boring"), "===> Exercise 2 text 2");
console.log(threeStepAB("barbarian"), "===> Exercise 2 text 3");


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

const inputArray = [8, 6, 2, 4]
const intSum = 10

const resultArray = sumArray(inputArray, intSum)
console.log(resultArray, "===> Exercise 3");


// Exercise 4
function arrSum(arr){
    let max = arr[0]
    let current = arr[0]
    let start = 0
    let end = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max + arr[i]) {
            max = arr[i]
            tempStart = i
        } else {
            max += arr [i]
        }
        if (max > current) {
            current = max
            start = tempStart
            end = i
        }
    }

    let subarray = arr.slice(start, end + 1)
    return [subarray, current]
}

console.log(arrSum([-2, -3, 5, -4, -1, 1, 6, -6]))