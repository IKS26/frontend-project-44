import { gameDescriptions, playGame } from '../index.js';
import generateRandomNumber from '../utils.js';

const gameName = 'brain-even';
const gameDescription = gameDescriptions[gameName];

const isEven = (number) => number % 2 === 0;

const generateGameData = () => {
  const number = generateRandomNumber(1, 100);
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const playBrainEven = () => playGame(generateGameData, gameDescription);

export default playBrainEven;
