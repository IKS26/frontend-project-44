import { gameDescriptions, playGame } from '../index.js';
import generateRandomNumber from '../utils.js';

const gameName = 'brain-gcd';
const gameDescription = gameDescriptions[gameName];

const createDivisors = (num1, num2) => {
  const minNum = Math.min(num1, num2);
  const divisors = [];
  for (let i = minNum; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
};

const generateGameData = () => {
  const num1 = generateRandomNumber(1, 100);
  const num2 = generateRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(Math.max(...createDivisors(num1, num2)));
  return { question, correctAnswer };
};

const playBrainGcd = () => playGame(generateGameData, gameDescription);

export default playBrainGcd;
