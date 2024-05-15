import { playGame } from '../index.js';
import { generateEvenPrimeGameData } from '../utils.js';

const isEven = (number) => number % 2 === 0;

const generateGameData = () => generateEvenPrimeGameData(isEven, 1, 100);

const playBrainEven = () => playGame(generateGameData, 'brain-even');

export default playBrainEven;
