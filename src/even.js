import readlineSync from "readline-sync"; //библиотека для чтения информации из консоли
import * as cli from "../src/cli.js"; //Подключаем модуль, в котором есть ф-я приветствия

//Функция generateNumber возращает случайное целое число между numberMin и numberMax
const generateNumber = (numberMin, numberMax) =>
  Math.round(Math.random() * (numberMax - numberMin) + numberMin);

export default () => {
  const numberMin = 1; //минимальное число в игре
  const numberMax = 99; //максимальное число в игре
  const scoreForWin = 3; //количество очков для победы
  let currentNumber;
  let rightAnswer;
  let userAnswer;
  const userName = cli.askNameAndHellow(); //Спрашиваем имя и приветствуем
  console.log('Answer "yes" if the number is even, otherwise answer "no".'); //на экран выводится описание игры
  let userScore = 0; //начальное количество очков

  while (userScore < scoreForWin) {
    //пока число очков пользователя меньше, чем необходимо, повторяем цикл
    currentNumber = generateNumber(numberMin, numberMax); //генерируем случайное число
    rightAnswer = currentNumber % 2 === 0 ? "yes" : "no"; //вычисляем правильный ответ: да, если четное, нет, если нечетное
    console.log(`Question: ${currentNumber}`); //выводим вопрос
    userAnswer = readlineSync.question("Your answer: "); //считываем ответ пользователя

    if (userAnswer === rightAnswer) {
      //если ответ правильный, прибавляем одно очко и выводим поздравление
      userScore += 1;
      console.log("Correct!");
    } else {
      //если ответ неправильный, обнуляем очки, выводим правильный ответ
      userScore = 0;
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
    }
  }
  //в конце игры выводим поздравление
  console.log(`Congratulations, ${userName}!`);
};
