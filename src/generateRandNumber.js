export default (numberMin = 1, numberMax = 99) => {
  const result = Math.round(Math.random() * (numberMax - numberMin) + numberMin);
  return result;
};
