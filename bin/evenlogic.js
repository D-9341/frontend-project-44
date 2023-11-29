import readlineSync from 'readline-sync';

function evenLogic(userName) {
  console.log(`Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
  for (let i = 0; i < 3; i += 1) {
    const num = Math.round(Math.random() * 100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (num % 2 === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
        break;
      }
    } else if (answer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      break;
    }
    if (i === 2) return console.log(`Congratulations, ${userName}!`);
  }
  return false;
}

export default evenLogic;
