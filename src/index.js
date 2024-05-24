import readlineSync from 'readline-sync';

const quantityOfRounds = 3;

export const gameDescriptions = {
  'brain-calc': 'What is the result of the expression?',
  'brain-even': 'Answer "yes" if the number is even, otherwise answer "no".',
  'brain-gcd': 'Find the greatest common divisor of given numbers.',
  'brain-prime':
      'Answer "yes" if given number is prime. Otherwise answer "no".',
  'brain-progression': 'What number is missing in the progression?',
};

const askGameQuestion = (description) => {
  if (!description) {
    throw new Error('Unknown game description');
  }
  console.log(description);
};

export const playGame = (generateGameData, gameDescription) => {
  const name = readlineSync.question(
    'Welcome to the Brain Games!\nMay I have your name? ',
  );
  console.log(`Hello, ${name}!`);

  askGameQuestion(gameDescription);

  for (let i = 0; i < quantityOfRounds; i += 1) {
    const { question, correctAnswer } = generateGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`,
      );
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
