import start from '..';
import { getRandomInt } from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
    if (b > a) {
        return findGcd(b, a);
    } 
    if (!b) {
        return a;
    }
    return findGcd(b, a % b);
  };
  
  const makeQuestionAndAnswer = () => {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
  
    const question = `${num1} ${num2}`;
    const answer = findGcd(num1, num2);
  
    return [question, String(answer)];
  };

  const runGame = () => start(description, makeQuestionAndAnswer);

  export default runGame;
  