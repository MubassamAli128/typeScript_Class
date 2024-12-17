class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


class Employee extends Person {
    constructor(name: string, age: number) {
        super(name, age);
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}


const employee = new Employee('Mubassam Ali', 19);
employee.sayHello();
