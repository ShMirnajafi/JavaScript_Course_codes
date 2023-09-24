//challenge 1
const markHeight = 1.69;
const markWeight = 78;

const johnHeight = 1.95;
const johnWeight = 92;

const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

const markNewHeight = 1.88;
const markNewWeight = 95;

const johnNewHeight = 1.76;
const johnNewWeight = 85;

const markNewBMI = markNewWeight / (markNewHeight ** 2);
const johnNewBMI = johnNewWeight / (johnNewHeight ** 2);

const markHigherNewBMI = markNewBMI > johnNewBMI;

console.log(markNewBMI, johnNewBMI, markHigherNewBMI); 