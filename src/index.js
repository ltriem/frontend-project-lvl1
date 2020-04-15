import readlineSync from 'readline-sync';

const roundsCount = 3;

const playGame = (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  console.log(description);
  const iter = (counter) => {
    if (counter === roundsCount) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const [question, answer] = getGameData();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (answer === playerAnswer) {
      console.log('Correct!');
      iter(counter + 1);
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${name}!`);
    }
  };
  iter(0);
};

export default playGame;
