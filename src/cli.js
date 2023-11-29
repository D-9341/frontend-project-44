import readlineSync from 'readline-sync';

function getName() {
  return readlineSync.question('May I have your name? ');
}

export default getName;
