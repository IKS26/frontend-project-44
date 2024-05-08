#!/usr/bin/env node
import gameEngine from '../../src/index.js';

const gameInstructions = () => 'Find the greatest common divisor of given numbers.';

const generateQuestion = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const minNum = Math.min(num1, num2);
  const divisors = [];
  for (let i = minNum; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      divisors.push(i);
    }
  }
  const question = `${num1} ${num2}`;
  const correctAnswer = String(Math.max(...divisors));
  return { question, correctAnswer };
};

const checkAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

gameEngine(gameInstructions, generateQuestion, checkAnswer);
