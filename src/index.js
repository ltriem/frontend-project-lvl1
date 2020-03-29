import readlineSync from 'readline-sync';

const gamesCounter = 3;

const start = (description, makeQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const iter = (counter) => {
    if (counter === gamesCounter) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const [question, answer] = makeQuestionAndAnswer();

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
}

export default start;
