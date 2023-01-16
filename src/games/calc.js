import generateRandNumber from '../generateRandNumber.js';
import index from '../index.js';

export default () => {
  const gameCondition = 'What is the result of the expression?';
  const questions = [];
  let currentQuestion;
  const rightAnswers = [];
  let firstNum;
  let secondNum;
  let operation;
  const minNumber = 1;
  const maxNumber = 10;

  for (let i = 0; i < 9; i += 1) {
    firstNum = generateRandNumber(minNumber, maxNumber);
    secondNum = generateRandNumber(minNumber, maxNumber);
    operation = generateRandNumber(1, 3);

    currentQuestion = firstNum;

    switch (operation) {
      case 1:
        currentQuestion += ' + ';
        rightAnswers.push(firstNum + secondNum);
        break;

      case 2:
        currentQuestion += ' - ';
        rightAnswers.push(firstNum - secondNum);
        break;

      case 3:
        currentQuestion += ' * ';
        rightAnswers.push(firstNum * secondNum);
        break;

      default:
    }

    currentQuestion += secondNum;
    questions.push(currentQuestion);
  }

s  index(gameCondition, questions, rightAnswers);
};
