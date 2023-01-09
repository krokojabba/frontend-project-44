/*

Модуль содержит игру even
Алгоритм работы:

1. Генерируем данные для основного модуля index.js:
  1.1 Описание игры: Answer "yes" if the number is even, otherwise answer "no".
  1.2 Массив условий: случайные целые числа от 1 до 99, используем для этого модуль generateRandNumber
  1.3 Массив правильных ответов: 'yes', если число четное; 'no', если число нечетное. Используем для
  этого остаток от деления на 2
2. Вызываем метод по умолчанию из модуля index.js

*/

import generateRandNumber from '../generateRandNumber.js';
import index from '../index.js'; //модуль с основной логикой

// служебная ф-я, возращающая true, если число четное и false, если нечетное
const isEven = (number) => number % 2 === 0;

export default () => {
  // 1. Генерируем данные для основного модуля index.js:

  // 1.1 Описание игры: Answer "yes" if the number is even, otherwise answer "no".
  const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

  // 1.2 Массив условий: случайные целые числа от 1 до 99, используем для этого модуль generateRandNumber
  // 1.3 Массив правильных ответов: 'yes', если число четное; 'no', если число нечетное. Используем для
  // этого остаток от деления на 2
  const questions = [];
  const rightAnswers = [];

  // Для генерации используется цикл for и ф-и generateRandNumber, isEven, данные записываются в стек
  for (let i = 0; i < 9; i += 1) {
    questions.push(generateRandNumber());
    if (isEven(questions[i])) {
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
