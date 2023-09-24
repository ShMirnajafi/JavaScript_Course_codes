'use strict';

const btn = document.querySelector('.poll');

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = prompt(`${this.question}\n${this.options.join('\n')}
    `);

    const numbered = Number(answer);
    if (answer === 'array' || answer === 'string') {
      this.displayResault(answer);
    } else if (numbered >= 0 && numbered <= 3) {
      console.log('Ok!');
      this.answers[numbered]++;
      //   console.log(this.answers);
    } else {
      console.log('Try again');
    }
    this.displayResault(answer);
  },
  displayResault(answer = 'array') {
    const result = this.answers;
    answer === 'array'
      ? console.log(result)
      : console.log(`Poll results are: ${result}`);
  },
};

const data1 = {
  answers: [5, 2, 3],
};
const data2 = {
  answers: [1, 5, 3, 9, 6, 1],
};

btn.addEventListener('click', poll.registerNewAnswer.bind(poll));

const displayResault1 = poll.displayResault.bind(data1);
const displayResault2 = poll.displayResault.bind(data2);

displayResault1('string');
displayResault2('array');
