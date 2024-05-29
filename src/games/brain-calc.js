import { playGame } from '../index.js';
import { generateRandomIndex } from '../utils.js';
import generateRandomNumber from '../utils.js';

const gameName = {
  'brain-calc': 'What is the result of the expression?',
};
const description = gameName['brain-calc'];
const operations = ['+', '-', '*'];

const min = 1;
const max = 100;

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

const generateTask = () => {
  const num1 = generateRandomNumber(min, max);
  const num2 = generateRandomNumber(min, max);
  const randomIndex = generateRandomIndex(operations);
  const operation = operations[randomIndex];
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = String(getOperationFunction(operation)(num1, num2));

  return { question, correctAnswer };
};

const playBrainCalc = () => playGame(generateTask, description);

export default playBrainCalc;
