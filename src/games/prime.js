import generateRandNumber from '../generateRandNumber.js';
import index from '../index.js'; // модуль с основной логикой

const isPrime = (num) => {
  let result = true;
  let divisor = 2;
  while (result === true && divisor < num) {
    if (num % divisor === 0) result = false;
    divisor += 1;
  }
  return result;
};

export default () => {
  const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questions = [];
  const rightAnswers = [];

  for (let i = 0; i < 9; i += 1) {
    questions.push(generateRandNumber());
    if (isPrime(questions[i])) {
      rightAnswers.push('yes');
    } else {
      rightAnswers.push('no');
    }
  }

  index(gameCondition, questions, rightAnswers);
};
