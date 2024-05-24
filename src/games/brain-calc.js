import { gameDescriptions, playGame } from '../index.js';
import generateRandomNumber from '../utils.js';

const gameName = 'brain-calc';
const gameDescription = gameDescriptions[gameName];
const operations = ['+', '-', '*'];

const getOperationFunction = (operation) => {
  switch (operation) {
    case '+':
      return (a, b) => a + b;
    case '-':
      return (a, b) => a - b;
    case '*':
      return (a, b) => a * b;
    default:
      throw new Error('Unknown operation');
  }
};

const generateGameData = () => {
  const num1 = generateRandomNumber(1, 100);
  const num2 = generateRandomNumber(1, 100);
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = String(getOperationFunction(operation)(num1, num2));

  return { question, correctAnswer };
};

const playBrainCalc = () => playGame(generateGameData, gameDescription);

export default playBrainCalc;
