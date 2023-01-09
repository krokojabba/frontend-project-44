/*

Модуль содержит игру progression
Алгоритм работы:

1. Генерируем данные для основного модуля index.js:
  1.1 Описание игры: What number is missing in the progression?
  1.2 Массив условий и правильных ответов в цикле for:
    1.2.1 Массив условий: каждая запись содержит ряд чисел, состовляющих арифметическую прогрессию
    длина прогрессии: от 5 до 15 чисел;
    первое число: от 1 до 10;
    инкремент: от 1 до 10
    местоположение пропущенного члена прогрессии: от 1 до длины прогрессии
    пропущенный член заменяется на ..
    Все параметры задаются случайно
    В массив условие записывается как текстовая строка через пробел.
    1.2.2 Массив правильных ответов: записывается пропущенное числов п. 1.2.1
2. Вызываем метод по умолчанию из модуля index.js

*/

import generateRandNumber from '../generateRandNumber.js';
import index from '../index.js'; // модуль с основной логикой

// служебная ф-я для генерации арифметической прогрессии
const getProgression = (firstNum, length, inc) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(firstNum + i * inc);
  }
  return result;
};

// служебная ф-я для перевода массива в строку через пробел
const arrayToString = (arr) => {
  let result = '';
  for (let i = 0; i < arr.length; i += 1) {
    result += `${arr[i]} `;
  }
  return result;
};

export default () => {
  // 1. Генерируем данные для основного модуля index.js:
  // 1.1 Описание игры:
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

  // 1.2 Массив условий и правильных ответов в цикле for:
  for (let i = 0; i < 9; i += 1) {
    /*
    1.2.1 Массив условий: каждая запись содержит ряд чисел, состовляющих арифметическую прогрессию
    длина прогрессии: от 5 до 15 чисел;
    первое число: от 1 до 10;
    инкремент: от 1 до 10
    местоположение пропущенного члена прогрессии: от 1 до длины прогрессии
    */
    firstNum = generateRandNumber(1, maxFirtsNum);
    length = generateRandNumber(minLength, maxLength);
    inc = generateRandNumber(1, maxInc);
    missingPos = generateRandNumber(1, length);
    progression = getProgression(firstNum, length, inc);

    // 1.2.2 Массив правильных ответов: записывается пропущенное числов п. 1.2.1
    rightAnswers.push(progression[missingPos - 1]);

    // пропущенный член заменяется на ..
    progression[missingPos - 1] = '..';

    // В массив условие записывается как текстовая строка через пробел.
    questions.push(arrayToString(progression));
  }

  // console.log(questions);
  // console.log(rightAnswers);

  // 2. Вызываем метод по умолчанию из модуля index.js
  index(gameCondition, questions, rightAnswers);
};
