import readlineSync from 'readline-sync';

export const askPrimeGameQuestion = (gameName) => {
  switch (gameName) {
    case 'brain-calc':
      console.log('What is the result of the expression?');
      break;
    case 'brain-even':
      console.log(
        'Answer "yes" if the number is even, otherwise answer "no".',
      );
      break;
    case 'brain-gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'brain-prime':
      console.log(
        'Answer "yes" if given number is prime. Otherwise answer "no".',
      );
      break;
    case 'brain-progression':
      console.log('What number is missing in the progression?');
      break;
    default:
      throw new Error('Unknown game name');
  }
};

export const playGame = (generateGameData, gameName) => {
  const name = readlineSync.question(
    'Welcome to the Brain Games!\nMay I have your name? ',
  );
  console.log(`Hello, ${name}!`);

  askPrimeGameQuestion(gameName);

  const quantityOfRounds = 3;
  let gameWon = true;
  for (let i = 0; i < quantityOfRounds; i += 1) {
    const { question, correctAnswer } = generateGameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`,
      );
      gameWon = false;
      break;
    } else {
      console.log('Correct!');
    }
  }
  if (gameWon) {
    console.log(`Congratulations, ${name}!`);
  }
};
