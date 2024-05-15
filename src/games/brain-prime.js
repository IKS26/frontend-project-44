import { playGame } from '../index.js';
import { generateEvenPrimeGameData } from '../utils.js';

const isPrime = (number) => {
  const sqrt = Math.sqrt(number);
  for (let i = 2; i <= sqrt; i += 1) if (number % i === 0) return false;
  return number > 1;
};

const generateGameData = () => generateEvenPrimeGameData(isPrime, 1, 100);

const playBrainPrime = () => playGame(generateGameData, 'brain-prime');

export default playBrainPrime;
