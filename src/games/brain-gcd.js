import playGame from '../index.js';
import { generateRandomNumber } from '../utils.js';

const gameName = {
  'brain-gcd': 'Find the greatest common divisor of given numbers.',
};
const description = gameName['brain-gcd'];

const min = 1;
const max = 100;

const findGCD = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
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
