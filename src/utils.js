const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const generateEvenPrimeGameData = (isFunction, min, max) => {
  const number = generateRandomNumber(min, max);
  const question = `${number}`;
  const correctAnswer = isFunction(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default generateRandomNumber;
