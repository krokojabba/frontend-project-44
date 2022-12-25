/*

Модуль содержит игру calc
Алгоритм работы:

1. Генерируем данные для основного модуля index.js:
  1.1 Описание игры: What is the result of the expression?
  1.2 Массив условий и правильных ответов в цикле for:
    1.2.1 Массив условий: каждая запись содержит 2 случайных целых числа от 1 до 10 и 1 случайное число от 1 до 3, 
    которое обозначает операцию, которую необходимо севершить над первыми 2 числами:
        1 - операция сложения
        2 - операция вычитания
        3 - операция умножения
        В массив условие записывается как текстовая строка.
    1.2.2 Массив правильных ответов: записывается число, которое является результатом вычисления выражения, полученного в п. 1.2.1
2. Вызываем метод по умолчанию из модуля index.js

*/

import generateRandNumber from "../generateRandNumber.js";
import index from "../index.js"; //модуль с основной логикой

export default () => {
  //1. Генерируем данные для основного модуля index.js:
  //1.1 Описание игры: What is the result of the expression?
  const gameCondition = "What is the result of the expression?";

  const questions = [];
  let currentQuestion;
  const rightAnswers = [];
  let firstNum;
  let secondNum;
  let operation;
  const minNumber = 1;
  const maxNumber = 10;

  //1.2 Массив условий и правильных ответов в цикле for:
  for (let i = 0; i < 9; i += 1) {
    //1.2.1 Массив условий: каждая запись содержит 2 случайных целых числа от 1 до 10 и 1 случайное число от 1 до 3,
    //которое обозначает операцию, которую необходимо севершить над первыми 2 числами
    firstNum = generateRandNumber(minNumber, maxNumber);
    secondNum = generateRandNumber(minNumber, maxNumber);
    operation = generateRandNumber(1, 3);

    currentQuestion = firstNum;

    //1 - операция сложения
    //2 - операция вычитания
    //3 - операция умножения
    //1.2.2 Массив правильных ответов: записывается число, которое является результатом вычисления выражения, полученного в п. 1.2.1
    switch (operation) {
      case 1:
        currentQuestion += " + ";
        rightAnswers.push(firstNum + secondNum);
        break;

      case 2:
        currentQuestion += " - ";
        rightAnswers.push(firstNum - secondNum);
        break;

      case 3:
        currentQuestion += " * ";
        rightAnswers.push(firstNum * secondNum);
        break;

      default:
    }

    currentQuestion += secondNum;
    //В массив условие записывается как текстовая строка.
    questions.push(currentQuestion);
  }

  //console.log(questions);
  //console.log(rightAnswers);

  //2. Вызываем метод по умолчанию из модуля index.js
  index(gameCondition, questions, rightAnswers);
};
