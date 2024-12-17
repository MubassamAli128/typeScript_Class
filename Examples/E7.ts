// Array

let numbers:number[]=[1,2,3,4,5];
console.log(numbers);

let strings:Array<string>=["hello","world"];
console.log(strings);

let mixed:(number|string)[]=[1,"two",3,"four"];
console.log(mixed);





// Array Methods

numbers.push(6);
console.log(numbers);

let lastNumber=numbers.pop();
console.log(lastNumber);
console.log(numbers);


let firstNumber=numbers.shift();
console.log(firstNumber);
console.log(numbers);


numbers.unshift(0);
console.log(numbers);




// Array Methods

numbers=[1,2,3,4,5];

numbers.forEach(num=>{
    console.log(num*2);
})


let doubled=numbers.map(num=>num*2);
console.log(doubled);


let evenNumbers=numbers.filter(num=>num%2===0);
console.log(evenNumbers);

let sum=numbers.reduce((acc,num)=>acc+num,0);
console.log(sum);


let found=numbers.find(num => num%2===0);
console.log(found);

numbers.sort((a,b)=>b-a);
console.log(numbers);


let person:[string,number]=["Mubassam",19];
console.log(person);
