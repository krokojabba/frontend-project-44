import generateRandNumber from '../generateRandNumber.js';

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
  const maxFirtsNum = 10;
  const minLength = 5;
  const maxLength = 15;
  const maxInc = 10;

  const firstNum = generateRandNumber(1, maxFirtsNum);
  const length = generateRandNumber(minLength, maxLength);
  const inc = generateRandNumber(1, maxInc);
  const missingPos = generateRandNumber(1, length);
  let progression = getProgression(firstNum, length, inc);

  let answer = progression[missingPos - 1];
  progression[missingPos - 1] = '..';
  const question = arrayToString(progression);
  return [question, answer];
};
