import readlineSync from 'readline-sync';

const askName = () => {
    const userName = readlineSync.question('\nMay I have your name?: ');
    console.log(`Hello, ${userName}!\n`);
    return userName;
  };


