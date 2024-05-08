#!/usr/bin/env node
import gameEngine from '../../src/index.js';

const gameInstructions = () => 'What number is missing in the progression?';

function generateQuestion() {
  const length = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 10) + 1;
  const hiddenIndex = Math.floor(Math.random() * length);

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    if (i === hiddenIndex) {
      progression.push('..');
    } else {
      progression.push(start + step * i);
    }
  }

  const question = progression.join(' ');
  const correctAnswer = String(start + step * hiddenIndex);

  return {
    question,
    correctAnswer,
  };
}

const checkAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

gameEngine(gameInstructions, generateQuestion, checkAnswer);
