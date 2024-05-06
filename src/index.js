import readlineSync from "readline-sync";

export const greetings = () => {
   const name = readlineSync.question(
      "Welcome to the Brain Games!\nMay I have your name? "
   );
   console.log(`Hello, ${name}!`);
   return name;
};

export const userAnswer = (progression) => {
   const userAnswer = readlineSync.question(
      `Question: ${progression}\nYour answer: `
   );
   return userAnswer;
};

const gameEngine = (gameInstructions, generateProgression, checkAnswer) => {
   const name = greetings();
   console.log(gameInstructions());

   let correctAnswersCount = 0;
   let gameContinue = true;

   while (correctAnswersCount < 3 && gameContinue) {
      gameContinue = playRound(generateProgression, checkAnswer, name);
      if (gameContinue) {
         correctAnswersCount += 1;
      }
   }

   if (gameContinue) {
      console.log(`Congratulations, ${name}!`);
   }
};

const playRound = (generateProgression, checkAnswer, name) => {
   const { progression, hiddenNumber } = generateProgression();
   const answer = userAnswer(progression.join(" "));
   const correctAnswer = String(hiddenNumber);

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
