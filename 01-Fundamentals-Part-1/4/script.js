//challenge 4

const bill = 275;
//const bill = 40;
//const bill = 430;
//const bill = Number(prompt());

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
