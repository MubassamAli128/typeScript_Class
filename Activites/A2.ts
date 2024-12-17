class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`Car Details: ${this.year} ${this.make} ${this.model}`);
    }
}


const myCar = new Car('Toyota', 'Corolla', 2020);
myCar.displayInfo();