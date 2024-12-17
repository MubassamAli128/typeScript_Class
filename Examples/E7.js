// Array
var numbers = [1, 2, 3, 4, 5];
console.log(numbers);
var strings = ["hello", "world"];
console.log(strings);
var mixed = [1, "two", 3, "four"];
console.log(mixed);
// Array Methods
numbers.push(6);
console.log(numbers);
var lastNumber = numbers.pop();
console.log(lastNumber);
console.log(numbers);
var firstNumber = numbers.shift();
console.log(firstNumber);
console.log(numbers);
numbers.unshift(0);
console.log(numbers);
// Array Methods
numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num) {
    console.log(num * 2);
});
var doubled = numbers.map(function (num) { return num * 2; });
console.log(doubled);
var evenNumbers = numbers.filter(function (num) { return num % 2 === 0; });
console.log(evenNumbers);
var sum = numbers.reduce(function (acc, num) { return acc + num; }, 0);
console.log(sum);
var found = numbers.find(function (num) { return num % 2 === 0; });
console.log(found);
numbers.sort(function (a, b) { return b - a; });
console.log(numbers);
var person = ["Mubassam", 19];
console.log(person);
