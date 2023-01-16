import generateRandNumber from '../generateRandNumber.js';
import index from '../index.js';

const getProgression = (firstNum, length, inc) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(firstNum + i * inc);
  }
  return result;
};

const arrayToString = (arr) => {
  let result = '';
  for (let i = 0; i < arr.length; i += 1) {
    result += `${arr[i]} `;
  }
  return result;
};

export default () => {
  const gameCondition = 'What number is missing in the progression?';

  const questions = [];
  const rightAnswers = [];
  let progression;

  const maxFirtsNum = 10;
  const minLength = 5;
  const maxLength = 15;
  const maxInc = 10;

  let firstNum;
  let length;
  let inc;
  let missingPos;

  for (let i = 0; i < 9; i += 1) {
    firstNum = generateRandNumber(1, maxFirtsNum);
    length = generateRandNumber(minLength, maxLength);
    inc = generateRandNumber(1, maxInc);
    missingPos = generateRandNumber(1, length);
    progression = getProgression(firstNum, length, inc);

    rightAnswers.push(progression[missingPos - 1]);

    progression[missingPos - 1] = '..';

    questions.push(arrayToString(progression));
  }

  index(gameCondition, questions, rightAnswers);
};
