import generateRandNumber from '../generateRandNumber.js';

const gcd = (num1, num2) => {
  let result = Math.min(num1, num2);
  while (num1 % result !== 0 || num2 % result !== 0) {
    result -= 1;
  }
  return result;
};

export default () => {
  const firstNum = generateRandNumber();
  const secondNum = generateRandNumber();
  const question = `${firstNum} ${secondNum}`;
  const answer = gcd(firstNum, secondNum);
  return [question, answer];
};
