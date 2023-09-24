//challenge 3

// const dolphinsFirstSet = 96;
// const dolphinsSecondSet = 108;
// const dolphinsThirdSet = 89;

// const koalasFisrtSet = 88;
// const koalasSecondSet = 91;
// const koalasThirdSet = 110;

// const dolphinsFirstSet = 97;
// const dolphinsSecondSet = 112;
// const dolphinsThirdSet = 101;

// const koalasFisrtSet = 109;
// const koalasSecondSet = 95;
// const koalasThirdSet = 123;

const dolphinsFirstSet = 97;
const dolphinsSecondSet = 112;
const dolphinsThirdSet = 101;

const koalasFisrtSet = 109;
const koalasSecondSet = 95;
const koalasThirdSet = 106;

const dolphinsAvg = (dolphinsFirstSet + dolphinsSecondSet + dolphinsThirdSet) / 3;
const koalasAvg = (koalasFisrtSet + koalasSecondSet + koalasThirdSet) / 3;

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log('Dolphins are the winner!');
} else if (dolphinsAvg < koalasAvg && koalasAvg >= 100) {
    console.log('Koalas are the winner!');
} else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
    console.log('Both wins...draw!');
} else {
    console.log('No one win...');
}