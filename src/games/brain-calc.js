import { playGame } from '../index.js';
import generateRandomNumber from '../utils.js';

const generateRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  return operation;
};

const generateGameData = () => {
  const num1 = generateRandomNumber(1, 100);
  const num2 = generateRandomNumber(1, 100);
  const operation = generateRandomOperation();
  const question = `${num1} ${operation} ${num2}`;
  let correctAnswer;
  switch (operation) {
    case '+':
      correctAnswer = String(num1 + num2);
      break;
    case '-':
      correctAnswer = String(num1 - num2);
      break;
    case '*':
      correctAnswer = String(num1 * num2);
      break;
    default:
      break;
  }
  return { question, correctAnswer };
};

const playBrainCalc = () => playGame(generateGameData, 'brain-calc');

export default playBrainCalc;
