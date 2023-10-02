function Automobile(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
Automobile.prototype.start = function () {
    console.log(`${this.make} ${this.model} is starting.`);
};

function FourWheeler(make, model, year, wheels) {
    Automobile.call(this, make, model, year);
    this.wheels = wheels;
}
FourWheeler.prototype = Object.create(Automobile.prototype);

FourWheeler.prototype.drive = function () {
    console.log(`${this.make} ${this.model} is driving on ${this.wheels} wheels.`);
};

const car1 = new FourWheeler("Toyota", "Camry", 2022, 4);
const car2 = new FourWheeler("Honda", "Civic", 2023, 4);

car1.start();
car1.drive();
car2.start();
car2.drive();
