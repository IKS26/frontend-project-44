import { gameDescriptions, playGame } from '../index.js';
import generateRandomNumber from '../utils.js';

const gameName = 'brain-prime';
const gameDescription = gameDescriptions[gameName];

const isPrime = (number) => {
  const sqrt = Math.sqrt(number);
  for (let i = 2; i <= sqrt; i += 1) if (number % i === 0) return false;
  return number > 1;
};

const generateGameData = () => {
  const number = generateRandomNumber(1, 100);
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};
const playBrainPrime = () => playGame(generateGameData, gameDescription);

export default playBrainPrime;
