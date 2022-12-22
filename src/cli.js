import readlineSync from "readline-sync"; //библиотека для чтения информации из консоли

//Функция, которая спрашивает имя пользователя и приветствует его
const askNameAndHellow = () => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? "); //Пользователь вводит имя
  console.log(`Hellow,  ${userName}!`); //Приветствуем пользователя
  return userName;
};

export { askNameAndHellow };
