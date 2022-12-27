/*

Модуль содержит игру gcd (greatest common divisor, наибольший общий делитель)
Алгоритм работы:

1. Генерируем данные для основного модуля index.js:
  1.1 Описание игры: Find the greatest common divisor of given numbers.
  1.2 Массив условий и правильных ответов в цикле for:
    1.2.1 Массив условий: каждая запись содержит 2 случайных целых числа от 1 до 99, 
    В массив условие записывается как текстовая строка.
    1.2.2 Массив правильных ответов: записывается число, которое является наибольший общий делитель чисел, полученных в п. 1.2.1
2. Вызываем метод по умолчанию из модуля index.js

*/

import generateRandNumber from "../generateRandNumber.js";
import index from "../index.js"; //модуль с основной логикой

//служебная ф-я для поиска наибольшего общего делителя 2ух чисед
const gcd = (num1, num2) => {
  let result = Math.min(num1, num2);
  while (num1 % result !== 0 || num2 % result !== 0) {
    result -= 1;
  }
  return result;
};

export default () => {
  //1. Генерируем данные для основного модуля index.js:
  //1.1 Описание игры: Find the greatest common divisor of given numbers.
  const gameCondition = "Find the greatest common divisor of given numbers.";

  const questions = [];
  const rightAnswers = [];
  let firstNum;
  let secondNum;
  //1.2 Массив условий и правильных ответов в цикле for:
  for (let i = 0; i < 9; i += 1) {
    //1.2.1 Массив условий: каждая запись содержит 2 случайных целых числа от 1 до 99,
    firstNum = generateRandNumber();
    secondNum = generateRandNumber();

    //В массив условие записывается как текстовая строка.
    questions.push(`${firstNum} ${secondNum}`);

    //1.2.2 Массив правильных ответов: записывается число, которое является наибольший общий делитель чисел, полученных в п. 1.2.1
    rightAnswers.push(gcd(firstNum, secondNum));
  }

  //console.log(questions);
  //console.log(rightAnswers);

  //2. Вызываем метод по умолчанию из модуля index.js
  index(gameCondition, questions, rightAnswers);
};
