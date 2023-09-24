//chalenge 4
'use strict'

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const total = [];

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const calcAvg = arr => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

for (let i = 0; i < bills.length; i++) {
    //bills[i] >= 50 && bills[i] <= 300 ? tips.push(bills[i] * 0.15) : tips.push(bills[i] * 0.2);
    tips.push(calcTip(bills[i]));
    total.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(total);

console.log(calcAvg(total));

