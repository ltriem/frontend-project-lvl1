import readlineSync from 'readline-sync';

const current = readlineSync.question('May I have your name?: ');
console.log('Hello, ' + current + '!');

export default current;