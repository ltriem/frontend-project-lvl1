import playGame from '..';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const makeQuestion = (firstNum, step, numberPosition) => {
  const questionData = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const progressionEl = firstNum + step * i;
    if (i === numberPosition) {
      questionData.push('..');
    } else {
      questionData.push(String(progressionEl));
    }
  }
  return questionData.join(' ');
};

const getGameData = () => {
  const firstNum = getRandomInt(1, 50);
  const step = getRandomInt(1, 20);
  const hiddenNumberPosition = getRandomInt(0, progressionLength - 1);
  const question = makeQuestion(firstNum, step, hiddenNumberPosition);
  const answer = firstNum + step * hiddenNumberPosition;
  return [question, String(answer)];
};

const runGame = () => playGame(description, getGameData);

export default runGame;
