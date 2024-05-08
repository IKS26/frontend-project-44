#!/usr/bin/env node
import gameEngine from '../../src/index.js';

const gameInstructions = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i += 1) if (num % i === 0) return false;
  return num > 1;
}

function generateQuestion() {
  const number = Math.floor(Math.random() * 100) + 1;
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { question, correctAnswer };
}

const checkAnswer = (userAnswer, correctAnswer) => userAnswer.toLowerCase() === correctAnswer;

gameEngine(gameInstructions, generateQuestion, checkAnswer);
