#!/usr/bin/env node
import gameEngine from '../../src/index.js';

const gameInstructions = () => 'What is the result of the expression?';

const generateQuestion = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
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

const checkAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

gameEngine(gameInstructions, generateQuestion, checkAnswer);
