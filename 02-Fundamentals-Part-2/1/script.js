//chalenge 1
'use strict'

// const firstDolphinsSet = 44;
// const secondDolphinsSet = 23;
// const thirdDolphinsSet = 71;

// const firstKoalasSet = 65;
// const secondKoalasSet = 54;
// const thirdKoalasSet = 49;

const firstDolphinsSet = 85;
const secondDolphinsSet = 54;
const thirdDolphinsSet = 41;

const firstKoalasSet = 23;
const secondKoalasSet = 34;
const thirdKoalasSet = 27;

const calcAverage = (firstSet, secondSet, thirdSet) => (firstSet + secondSet + thirdSet) / 3;

const avgDolphins = calcAverage(firstDolphinsSet, secondDolphinsSet, thirdDolphinsSet);
const avgKoalas = calcAverage(firstKoalasSet, secondKoalasSet, thirdKoalasSet);

const checkWinner = (avgTeamA, avgTeamB) => {
    if (avgTeamA > 2 * avgTeamB) {
        console.log(`Dolphins winner (${avgTeamA} vs ${avgTeamB})`);
    } else if (avgTeamB > 2 * avgTeamA) {
        console.log(`Koalas winner (${avgTeamB} vs ${avgTeamA})`);
    } else {
        console.log('There is no winner');
    }
}

checkWinner(avgDolphins, avgKoalas);