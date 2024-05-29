import { playGame } from '../index.js';
import generateRandomNumber from '../utils.js';

const gameName = {
  'brain-gcd': 'Find the greatest common divisor of given numbers.',
};
const description = gameName['brain-gcd'];

const min = 1;
const max = 100;

const findGCD = (num1, num2) => {
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const generateTask = () => {
  const num1 = generateRandomNumber(min, max);
  const num2 = generateRandomNumber(min, max);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGCD(num1, num2));
  return { question, correctAnswer };
};

const playBrainGcd = () => playGame(generateTask, description);

export default playBrainGcd;
