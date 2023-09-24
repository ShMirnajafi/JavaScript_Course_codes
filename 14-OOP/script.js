'use strict';
// challenge 1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
// };

// Car.prototype.breake = function () {
//   this.speed -= 5;
// };

// Car.prototype.info = function () {
//   console.log(`'${this.make}' is going at ${this.speed} km/h`);
// };

// const bmw = new Car('BMW', 100);
// const mercedes = new Car('Mercedes', 90);

// mercedes.info();
// bmw.info();

// bmw.accelerate();
// mercedes.breake();

// bmw.info();
// mercedes.info();

//-----------------
// challenge 2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  info() {
    console.log(`'${this.make}' is going at ${this.speed} km/h`);
  }

  breake() {
    this.speed -= 5;
  }

  accelerate() {
    this.speed += 10;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speedUs) {
    this.speed = speedUs * 1.6;
  }
}

// const ford = new CarCl('Ford', 120);

// ford.info();
// console.log(ford.speedUS);

// ford.speedUS = 80;
// ford.info();

//---------------------------
// challenge 3

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
// };

// EV.prototype.info = function () {
//   console.log(
//     `'${this.make}' is going at ${this.speed} km/h with ${this.charge}% battery`
//   );
// };

// EV.prototype.chargeTo = function (charge) {
//   this.charge = charge;
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.info();

// tesla.accelerate();
// tesla.info();

// tesla.breake();
// tesla.info();

// tesla.chargeTo(50);
// tesla.info();

//-----------------
//challenge 4

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeTo(charge) {
    this.#charge = charge;
    return this;
  }

  info() {
    console.log(
      `'${this.make}' is going at ${this.speed} km/h with ${
        this.#charge
      }% battery`
    );
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    return this;
  }

  breake() {
    this.speed -= 5;
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
rivian.info();

rivian.accelerate().info().breake().info().chargeTo(90).info();
console.log(rivian.speedUS);
