#!/usr/bin/env node
import readlineSync from "readline-sync";

const greetings = () => {
   const name = readlineSync.question(
      "Welcome to the Brain Games!\nMay I have your name? "
   );
   console.log(
      `Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`
   );
   return name;
};

const userAnswer = (number) => {
   const userAnswer = readlineSync.question(
      `Question: ${number}\nYour answer: `
   );
   return userAnswer;
};

const name = greetings();
let correctAnswersCount = 0;
let gameContinue = true;

while (correctAnswersCount < 3 && gameContinue) {
   let number = Math.floor(Math.random() * 100 + 1);
   let answer = userAnswer(number);

   if (
      (number % 2 === 0 && answer.toLowerCase() === "yes") ||
      (number % 2 !== 0 && answer.toLowerCase() === "no")
   ) {
      console.log("Correct!");
      correctAnswersCount += 1;
   } else if (
      (number % 2 === 0 && answer.toLowerCase() === "no") ||
      (number % 2 !== 0 && answer.toLowerCase() === "yes")
   ) {
      console.log(
         `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`
      );
      gameContinue = false;
   } else if (answer.toLowerCase() !== "yes" && answer.toLowerCase() !== "no") {
      console.log(
         `'${answer}' is wrong answer ;(. Correct answer was 'yes' or 'no'.\nLet's try again, ${name}!`
      );
      gameContinue = false;
   }
}

if (gameContinue) {
   console.log(`Congratulations, ${name}!`);
}
