// You are given an array (which will have a length of at least 3, but could be very large) 
// containing integers. The array is either entirely comprised of odd integers or entirely 
// comprised of even integers except for a single integer N. Write a function that takes the 
// array as an argument and returns this “outlier” N.

// Examples:

// [2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)

function outlier(arr) {
    let even = []
    let odd = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i])
        } else {
            odd.push(arr[i])
        } 
    }
    if (even.length > odd.length) {
        return +odd
    } else {
        return +even
    }
}

console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(outlier([160, 3, 1719, 19, 11, 13, -21]))
console.log(outlier([47, 91, 31, 59, 99, 2, 43]))
console.log(outlier([2222, 46, 100, -3, 72]))