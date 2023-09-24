//chalenge 3
'use strict'

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

console.log(`${mark.calcBMI() > john.calcBMI() ? `Mark's BMI (${mark.calcBMI()}) is higher than John's BMI(${john.calcBMI()})` : `John's BMI (${john.calcBMI()}) is higher than Marks's BMI(${mark.calcBMI()})`}`);