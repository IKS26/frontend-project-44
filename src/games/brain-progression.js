import playGame from '../index.js';
import { generateRandomIndex, generateRandomNumber } from '../utils.js';

const gameName = {
  'brain-progression': 'What number is missing in the progression?',
};
const description = gameName['brain-progression'];

const minLengthAllowed = 5;
const maxLength = 10;
const minStart = 0;
const maxStart = 100;
const minStep = 0;
const maxStep = 8;

const generateProgression = (length, start, step) =>
  Array.from({ length: length }, (_, i) => start + step * i);

const generateTask = () => {
  const length = generateRandomNumber(minLengthAllowed, maxLength);
  const start = generateRandomNumber(minStart, maxStart);
  const step = generateRandomNumber(minStep, maxStep);
  const progression = generateProgression(length, start, step);
  const hiddenIndex = generateRandomIndex(progression);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return {
    question,
    correctAnswer,
  };
};

const playBrainProgression = () => playGame(generateTask, description);

export default playBrainProgression;
