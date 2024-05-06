import readlineSync from "readline-sync";

export const greetings = () => {
   const name = readlineSync.question(
      "Welcome to the Brain Games!\nMay I have your name? "
   );
   console.log(`Hello, ${name}!`);
   return name;
};

export const userAnswer = (question) => {
   const userAnswer = readlineSync.question(
      `Question: ${question}\nYour answer: `
   );
   return userAnswer;
};

const gameEngine = (gameInstructions, generateQuestion, checkAnswer) => {
   const name = greetings();
   console.log(gameInstructions());

   let correctAnswersCount = 0;
   let gameContinue = true;

   while (correctAnswersCount < 3 && gameContinue) {
      gameContinue = playRound(generateQuestion, checkAnswer, name);
      if (gameContinue) {
         correctAnswersCount += 1;
      }
   }

   if (gameContinue) {
      console.log(`Congratulations, ${name}!`);
   }
};

const playRound = (generateQuestion, checkAnswer, name) => {
   const { question, correctAnswer } = generateQuestion();
   const answer = userAnswer(question);

   if (checkAnswer(answer, correctAnswer)) {
      console.log("Correct!");
      return true;
   } else {
      console.log(
         `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`
      );
      return false;
   }
};

export default gameEngine;
