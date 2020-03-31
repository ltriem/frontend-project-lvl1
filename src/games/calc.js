import start from '..';
import getRandomInt from '../utils';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const amountOfOperations = operations.length;
const makeAnswer = (operation, num1, num2) => {
  let answer;
  switch (operation) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
    default: break;
  }
  return answer;
};
const makeGame = () => {
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  const operation = operations[getRandomInt(0, amountOfOperations - 1)];
  const answer = makeAnswer(operation, num1, num2);
  const question = `${num1} ${operation} ${num2}`;
  return [question, String(answer)];
};
const runGame = () => start(description, makeGame);

export default runGame;
