import generateRandNumber from '../generateRandNumber.js';

export default () => {
  const minNumber = 1;
  const maxNumber = 10;

  const firstNum = generateRandNumber(minNumber, maxNumber);
  const secondNum = generateRandNumber(minNumber, maxNumber);
  const operation = generateRandNumber(1, 3);

  let question = firstNum;
  let answer;

  switch (operation) {
    case 1:
      question += ' + ';
      answer = firstNum + secondNum;
      break;

    case 2:
      question += ' - ';
      answer = firstNum - secondNum;
      break;

    case 3:
      question += ' * ';
      answer = firstNum * secondNum;
      break;

    default:
  }

  question += secondNum;
  return [question, answer];
};
