import start from '..';
import getRandomInt from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const firstNum = 1;
const lim = 100;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const iter = (divisor) => {
    if (divisor > Math.sqrt(num)) {
      return true;
    }
    if (num % divisor === 0) {
      return false;
    }
    return iter(divisor + 1);
  };
  return iter(2);
};

const makeGame = () => {
  const question = getRandomInt(firstNum, lim);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [String(question), answer];
};

const runGame = () => start(description, makeGame);

export default runGame;
