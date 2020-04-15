import playGame from '..';
import getRandomInt from '../utils';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (num) => num % 2 === 0;
const getGameData = () => {
  const question = getRandomInt(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [String(question), answer];
};

const runGame = () => playGame(description, getGameData);

export default runGame;
