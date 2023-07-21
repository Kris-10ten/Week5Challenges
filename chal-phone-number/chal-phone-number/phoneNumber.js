// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.

// Example:

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don’t forget the space after the closing parentheses!

function phoneNumber(arr) {
    arr.splice(0, 0, '(')
    arr.splice(4, 0, ')')
    arr.splice(5, 0, ' ')
    arr.splice(9, 0 ,'-')
    return arr.join('')
}

console.log(phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log(phoneNumber([4, 2, 3, 4, 5, 9, 7, 8, 9, 0]))
console.log(phoneNumber([8, 0, 3, 4, 7, 7, 4, 8, 9, 6]))
console.log(phoneNumber([4, 4, 3, 4, 5, 6, 7, 8, 3, 0]))

// Another way to create a phone number

function createPhoneNumber(numbers) {
    // Join the array elements into a string
    const phoneNumber = numbers.join('');
  
    // Format the string into a phone number
    const formattedPhoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
  
    return formattedPhoneNumber;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log(createPhoneNumber([4, 2, 3, 4, 5, 9, 7, 8, 9, 0]))
console.log(createPhoneNumber([8, 0, 3, 4, 7, 7, 4, 8, 9, 6]))
console.log(createPhoneNumber([4, 4, 3, 4, 5, 6, 7, 8, 3, 0]))