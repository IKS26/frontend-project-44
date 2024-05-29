import { playGame } from '../index.js';
import generateRandomNumber from '../utils.js';

const gameName = {
  'brain-even': 'Answer "yes" if the number is even, otherwise answer "no".',
};
const description = gameName['brain-even'];

const min = 0;
const max = 100;

const isEven = (num) => num % 2 === 0;

const generateTask = () => {
  const num = generateRandomNumber(min, max);
  const question = String(num);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const playBrainEven = () => playGame(generateTask, description);

export default playBrainEven;
