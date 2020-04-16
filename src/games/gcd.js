import playGame from '..';
import getRandomInt from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (a === b || a % b === 0) return b;
  return findGcd(b % a, a);
};

const getGameData = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const answer = findGcd(num1, num2);
  return [question, String(answer)];
};

const runGame = () => playGame(description, getGameData);

export default runGame;
