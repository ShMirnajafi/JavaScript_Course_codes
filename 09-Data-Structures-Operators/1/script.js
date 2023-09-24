// challenge 1 & 2 & 3
'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

const [players1, players2] = game.players;
// console.log(playerS1, playerS2);

const [gk, ...fieldsPlayer] = players1;
// console.log(gk, fieldsPlayer);

const allPlayers = [...game.players[0], ...game.players[1]];
// console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// const { team1, x: draw, team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 },
} = game;
// console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(...players, `${players.length} goals`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

console.log(
  (team1 < team2 && 'Bayern Munich') || (team2 < team1 && 'Borrussia Dortmund')
);

for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}`);
}

let sum = 0;
const values = Object.values(game.odds);
for (const iterator of values) {
  // console.log(iterator);
  sum += iterator;
}
const avg = sum / values.length;
console.log(`Average of odds is ${avg}`);

for (const [team, odd] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${(team === 'x' && 'drow') || `victory ${game[team]}`} is ${odd} `
  );
}

const scores = {};
for (const player of Object.values(game.scored)) {
  scores[player] > 0 ? scores[player]++ : (scores[player] = 1);
}
console.log(scores);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
// console.log(gameEvents.entries());

let totalTime = 0;
let previosTime = 0;
for (const time of gameEvents.keys()) {
  totalTime += time - previosTime;
  previosTime = time;
}
const eventsAvg = totalTime / gameEvents.size;
console.log(`An event happened, on average, every ${eventsAvg} minutes`);

for (const [time, event] of gameEvents.entries()) {
  console.log(
    `${time <= 45 ? '[First half]' : '[Second half]'} ${time} : ${event}`
  );
}

//-----------------------------------------------------------------
//chalenge 4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button');

const converter = function (...words) {
  let counter = 1;
  for (const word of words) {
    const newWord = word.toLowerCase().replaceAll(' ', '');
    let index = newWord.indexOf('_');
    const preFinal = newWord.replace('_', '');
    const newNewWord =
      preFinal.slice(0, index) +
      preFinal[index].toUpperCase() +
      preFinal.slice(index + 1);
    const finalWord = newNewWord.padEnd(20, ' ');
    console.log(finalWord, '✅'.repeat(counter));
    counter++;
  }
};

// converter(
//   'underscore_case',
//   'first_name',
//   'Some_Variable',
//   'calculate_AGE',
//   'delayed_departure'
// );

btn.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  converter(...text.split('\n'));
});
