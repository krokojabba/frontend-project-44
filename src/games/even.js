import generateRandNumber from '../generateRandNumber.js';
import index from '../index.js';

const isEven = (number) => number % 2 === 0;

export default () => {
  const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

  const questions = [];
  const rightAnswers = [];

  for (let i = 0; i < 9; i += 1) {
    questions.push(generateRandNumber());
    if (isEven(questions[i])) {
      rightAnswers.push('yes');
    } else {
      rightAnswers.push('no');
    }
  }

  index(gameCondition, questions, rightAnswers);
};
