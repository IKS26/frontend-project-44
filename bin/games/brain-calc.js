#!/usr/bin/env node
import gameEngine from "../../src/index.js";

const gameInstructions = () => {
   return `What is the result of the expression?`;
};

const generateQuestion = () => {
   const num1 = Math.floor(Math.random() * 100) + 1;
   const num2 = Math.floor(Math.random() * 100) + 1;
   const operations = ["+", "-", "*"];
   const operation = operations[Math.floor(Math.random() * operations.length)];
   const question = `${num1} ${operation} ${num2}`;
   const correctAnswer = String(eval(`${num1} ${operation} ${num2}`));
   return { question, correctAnswer };
};

const checkAnswer = (userAnswer, correctAnswer) => {
   return userAnswer === correctAnswer;
};

gameEngine(gameInstructions, generateQuestion, checkAnswer);
