import readlineSync from "readline-sync"; //библиотека для чтения информации из консоли

//Функция, которая спрашивает имя пользователя
const askName = () => {
  const userName = readlineSync.question("May I have your name? ");
  return userName;
};

export { askName };
