import generateRandNumber from '../generateRandNumber.js';
import index from '../index.js';

const gcd = (num1, num2) => {
  let result = Math.min(num1, num2);
  while (num1 % result !== 0 || num2 % result !== 0) {
    result -= 1;
  }
  return result;
};

export default () => {
  const gameCondition = 'Find the greatest common divisor of given numbers.';
  const questions = [];
  const rightAnswers = [];
  let firstNum;
  let secondNum;

  for (let i = 0; i < 9; i += 1) {
    firstNum = generateRandNumber();
    secondNum = generateRandNumber();

    questions.push(`${firstNum} ${secondNum}`);

    rightAnswers.push(gcd(firstNum, secondNum));
  }

  index(gameCondition, questions, rightAnswers);
};
