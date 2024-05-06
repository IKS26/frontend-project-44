#!/usr/bin/env node
import gameEngine from "../../src/index.js";

const gameInstructions = () => {
   return `Answer "yes" if given number is prime. Otherwise answer "no".`;
};

function isPrime(num) {
   let sqrt = Math.sqrt(num);
   for (let i = 2; i <= sqrt; i++) if (num % i === 0) return false;
   return num > 1;
}

function generateQuestion() {
   const number = Math.floor(Math.random() * 100) + 1;
   const question = `${number}`;
   const correctAnswer = isPrime(number) ? "yes" : "no";
   return { question, correctAnswer };
}

const checkAnswer = (userAnswer, correctAnswer) => {
   return userAnswer.toLowerCase() === correctAnswer;
};

gameEngine(gameInstructions, generateQuestion, checkAnswer);
