/*

Модуль содержит игру prime
Алгоритм работы:

1. Генерируем данные для основного модуля index.js:
  1.1 Описание игры: Answer "yes" if given number is prime. Otherwise answer "no".
  1.2 Массив условий и правильных ответов в цикле for:
    1.2.1 Массив условий: каждая запись содержит случайное число от 1 до 99,
    1.2.2 Массив правильных ответов: записывается 'yes', если число простое и 'no',
    если число не простое
2. Вызываем метод по умолчанию из модуля index.js

*/

import generateRandNumber from '../generateRandNumber.js';
import index from '../index.js'; // модуль с основной логикой

// служебная ф-я, которая возвращает true, если число является простым
// работает только с натуральными цислами
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
  // 1. Генерируем данные для основного модуля index.js:

  // 1.1 Описание игры:
  const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  // 1.2 Массив условий: случайные целые числа от 1 до 99, используем для этого модуль
  // generateRandNumber
  // 1.3 Массив правильных ответов: 'yes', если число простое; 'no', в остальных случаях
  const questions = [];
  const rightAnswers = [];

  // Для генерации используется цикл for и ф-и generateRandNumber, isEven, данные
  // записываются в стек
  for (let i = 0; i < 9; i += 1) {
    questions.push(generateRandNumber());
    if (isPrime(questions[i])) {
      rightAnswers.push('yes');
    } else {
      rightAnswers.push('no');
    }
  }

  // console.log(questions);
  // console.log(rightAnswers);

  // 2. Вызываем метод по умолчанию из модуля index.js
  index(gameCondition, questions, rightAnswers);
};
