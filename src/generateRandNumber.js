//Функция generateRandNumber возращает случайное целое число между numberMin и numberMax (по умолчанию от 1 до 99)
export default (numberMin = 1, numberMax = 99) =>
  Math.round(Math.random() * (numberMax - numberMin) + numberMin);
