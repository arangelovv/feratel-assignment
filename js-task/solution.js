const Calculator = {
  calculateSum: function (numbers) {
    return numbers.reduce((currentSum, currentNum) => currentSum + currentNum, 0);
  },

  capitalizeString: function (str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  },

  findMax: function (arr) {
    return Math.max(...arr);
  },

  checkPalindrome: function (str) {
    let stringLower = str.toLowerCase();
    let reversed = stringLower.split("").reverse().join("");
    return stringLower === reversed;
  },

  generateFibonacci: function (n) {
    let fibonacci = [0, 1];

    if (n <= 0) return [];
    if (n === 1) return [0];

    for (let i = 2; i < n; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci;
  },

  convertToBinary: function (num) {
    return num.toString(2);
  },

  getRandomNumber: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  filterArray: function (arr, condition) {
    return arr.filter(condition);
  },
};

// Example usage
const numbers = [1, 2, 3, 4, 5];
const str = "hello world";
const arr = [3, 1, 7, 5, 2, 9];

console.log("Sum:", Calculator.calculateSum(numbers));
console.log("Capitalized String:", Calculator.capitalizeString(str));
console.log("Max Value:", Calculator.findMax(arr));
console.log("Is Palindrome:", Calculator.checkPalindrome(str));
console.log("Fibonacci Sequence:", Calculator.generateFibonacci(10));
console.log("Binary Representation:", Calculator.convertToBinary(42));
console.log("Random Number:", Calculator.getRandomNumber(1, 100));
console.log(
  "Filtered Array:",
  Calculator.filterArray(arr, (num) => num % 2 === 0)
);
