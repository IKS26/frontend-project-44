import { playGame } from '../index.js';

const generateLengthOfProgr = (length) => Math.floor(Math.random() * (length / 2 + 1)) + length / 2;
const generateStartNumber = (length) => Math.floor(Math.random() * length);
const generateStepOfProgression = (length) => Math.floor(Math.random() * length) + 1;
const generateHiddenIndex = (length) => Math.floor(Math.random() * length);

const generateProgression = (length, hiddenIndex, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    if (i === hiddenIndex) {
      progression.push('..');
    } else {
      progression.push(start + step * i);
    }
  }
  return progression;
};

const generateGameData = () => {
  const length = generateLengthOfProgr(10);
  const start = generateStartNumber(length);
  const step = generateStepOfProgression(length);
  const hiddenIndex = generateHiddenIndex(length);
  const progression = generateProgression(length, hiddenIndex, start, step);
  const question = progression.join(' ');
  const correctAnswer = String(start + step * hiddenIndex);

  return {
    question,
    correctAnswer,
  };
};

const playBrainProgression = () => playGame(generateGameData, 'brain-progression');

export default playBrainProgression;
