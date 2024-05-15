import readlineSync from 'readline-sync';

export const makeGreetings = () => {
  console.log('Welcome to the Brain Games!');
};
export const askQuestionAboutName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
