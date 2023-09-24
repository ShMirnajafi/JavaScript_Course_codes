'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const checkDogs = function (dogsJulia, dogsKate) {
  const correctedDogsJulia = dogsJulia.slice(1, -2);

  const bothDogs = correctedDogsJulia.concat(dogsKate);
  // console.log(bothDogs);

  bothDogs.forEach(function (dog, i) {
    const age = dog >= 3 ? 'an adoult' : 'a puppy';
    console.log(`dog number ${i + 1} is ${age}, and is ${dog} year old`);
  });
};

const juliaData1 = [3, 5, 2, 12, 7];
const kateData1 = [4, 1, 15, 8, 3];

const juliaData2 = [9, 16, 6, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];

checkDogs(juliaData1, kateData1);
checkDogs(juliaData2, kateData2);

const calcAverageHumanAge = array =>
  array.reduce(
    (totalAge, cur) =>
      cur <= 2
        ? totalAge + (2 * cur) / array.length
        : totalAge + (16 + 4 * cur) / array.length,
    0
  );

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));

console.log(
  data1
    .map(function (cur) {
      return cur <= 2 ? 2 * cur : 16 + 4 * cur;
    })
    .filter(function (cur) {
      return cur > 18;
    })
);
console.log(
  data2
    .map(function (cur) {
      return cur <= 2 ? 2 * cur : 16 + 4 * cur;
    })
    .filter(function (cur) {
      return cur > 18;
    })
);

console.log(`total average is ${calcAverageHumanAge(data1.concat(data2))}`);

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(function (cur) {
  cur.recommendedFood = cur.weight ** 0.75 * 28;
});

console.log(dogs);

// const sarahDogIndex = dogs.findIndex(cur =>
//   cur.owners.some(own => own === 'Sarah')
// );
// const sarahsDog = dogs[sarahDogIndex];

const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));

console.log(
  sarahsDog.curFood > sarahsDog.recommendedFood * 0.9 &&
    sarahsDog.curFood < sarahsDog.recommendedFood * 1.1
    ? 'its ok Sarah'
    : 'Sarah...your dog will die soon...'
);

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood * 1.1)
  .map(cur => cur.owners)
  .flat();

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood * 0.9)
  .map(cur => cur.owners)
  .flat();

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);

const okDogs = dogs.filter(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);

console.log(okDogs);

const sorted = dogs.map(cur => cur).sort((a, b) => b.curFood - a.curFood);

console.log(sorted);
