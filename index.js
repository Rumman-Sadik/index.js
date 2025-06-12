// 1. Function to count vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// 2. Function to sort numbers in ascending order
function sortNumbers(arr) {
    return arr.slice().sort((a, b) => a - b);
}

// 3. Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 4. Function to get the last element of an array
function getLastElement(arr) {
    return arr[arr.length - 1];
}

// 5. Function to merge two arrays
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

// 6. Function to check if string contains a space
function hasSpace(str) {
    return str.includes(' ');
}

// 7. Function to check if string is empty
function isEmptyString(str) {
    return str === '';
}

// 8. Function to remove negative numbers from array
function removeNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
}