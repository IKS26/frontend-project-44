#!/usr/bin/env node
import gameEngine from "../../src/index.js";

const gameInstructions = () => {
   return `Answer "yes" if the number is even, otherwise answer "no".`;
};

const generateQuestion = () => {
   const number = Math.floor(Math.random() * 100 + 1);
   const question = `${number}`;
   const correctAnswer = number % 2 === 0 ? "yes" : "no";
   return { question, correctAnswer };
};

const checkAnswer = (userAnswer, correctAnswer) => {
   return userAnswer.toLowerCase() === correctAnswer;
};

gameEngine(gameInstructions, generateQuestion, checkAnswer);
