import { playGame } from '../index.js';
import generateRandomNumber from '../utils.js';

const gameName = {
  'brain-prime':
    'Answer "yes" if given number is prime. Otherwise answer "no".',
};
const description = gameName['brain-prime'];

const min = 1;
const max = 100;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }

  const sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateTask = () => {
  const num = generateRandomNumber(min, max);
  const question = String(num);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return { question, correctAnswer };
};
const playBrainPrime = () => playGame(generateTask, description);

export default playBrainPrime;
