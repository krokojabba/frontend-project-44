import generateRandNumber from '../generateRandNumber.js';

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
  let answer;

  const question = generateRandNumber();
  if (isPrime(question)) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [question, answer];
};
