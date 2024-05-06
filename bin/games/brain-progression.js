#!/usr/bin/env node
import gameEngine from "../../src/index.js";

const gameInstructions = () => {
   return `What number is missing in the progression?`;
};

function generateProgression() {
   const length = Math.floor(Math.random() * 6) + 5;
   const start = Math.floor(Math.random() * 10);
   const step = Math.floor(Math.random() * 10) + 1;
   const hiddenIndex = Math.floor(Math.random() * length);

   const progression = [];
   for (let i = 0; i < length; i++) {
      if (i === hiddenIndex) {
         progression.push("..");
      } else {
         progression.push(start + step * i);
      }
   }

   return {
      progression,
      hiddenNumber: start + step * hiddenIndex,
   };
}

const checkAnswer = (userAnswer, correctAnswer) => {
   return userAnswer === correctAnswer;
};

gameEngine(gameInstructions, generateProgression, checkAnswer);
