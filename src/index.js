import readlineSync from 'readline-sync';

const quantityOfRounds = 3;

export const playGame = (generateTask, description) => {
  const name = readlineSync.question(
    'Welcome to the Brain Games!\nMay I have your name? ',
  );
  console.log(`Hello, ${name}!`);

  console.log(description);

  for (let i = 0; i < quantityOfRounds; i += 1) {
    const { question, correctAnswer } = generateTask();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
