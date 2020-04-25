import playGame from '..';
import getRandomInt from '../utils';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const calculate = (operation, num1, num2) => {
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
      break;
    return null;
  }
  return answer;
};

const getGameData = () => {
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  const operation = operations[getRandomInt(0, operations.length - 1)];
  const answer = calculate(operation, num1, num2);
  const question = `${num1} ${operation} ${num2}`;
  return [question, String(answer)];
};

const runGame = () => playGame(description, getGameData);

export default runGame;
