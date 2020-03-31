import start from '..';
import getRandomInt from '../utils';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const makeGame = () => {
  const question = getRandomInt(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [String(question), answer];
};
const runGame = () => start(description, makeGame);

export default runGame;
