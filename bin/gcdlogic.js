import readlineSync from 'readline-sync';

function greatestCommonDivisorLogic(userName) {
  console.log(`Hello, ${userName}!\nFind the greatest common divisor of given numbers.`);
  for (let i = 0; i < 3; i += 1) {
    let first = Math.round(Math.random() * 10);
    let second = Math.round(Math.random() * 10);
    console.log(`Question: ${first} ${second}`);
    const answer = readlineSync.question('Your answer: ');
    let result = 0;
    while (first && second) {
      if (first > second) {
        first -= second;
      } else {
        second -= first;
      }
      result = first + second;
    }
    if (Number(answer) === result) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
      i = 3;
    }
    if (i === 2) return console.log(`Congratulations, ${userName}!`);
  }
  return false;
}

export default greatestCommonDivisorLogic;
