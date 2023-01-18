import generateRandNumber from '../generateRandNumber.js';

const isEven = (number) => number % 2 === 0;

export default () => {
  const question = generateRandNumber();
  let answer;

  if (isEven(question)) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [question, answer];
};
