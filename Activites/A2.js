var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.displayInfo = function () {
        console.log("Car Details: ".concat(this.year, " ").concat(this.make, " ").concat(this.model));
    };
    return Car;
}());
var myCar = new Car('Toyota', 'Corolla', 2020);
myCar.displayInfo();
