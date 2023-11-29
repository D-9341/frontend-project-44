import readlineSync from 'readline-sync';

export function progressionLogic(userName) {
  console.log(`Hello, ${userName}!\nWhat number is missing in the progression?`);
  let final = [];
  for (let i = 0; i < 3; i += 1) {
    const progress = Math.floor(Math.random() * 10);
    const index = Math.floor(Math.random() * 10);
    for (let j = Math.floor(Math.random() * 10); j < 100; j += progress) {
      if (final.length === 10) {
        break;
      } else {
        final.push(j);
      }
    }
    const toReplace = final.splice(index, 1, '..');
    console.log(`Question: ${final.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === Number(toReplace)) {
      console.log('Correct!');
      final = [];
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${toReplace}'.\nLet's try again, ${userName}!`);
      break;
    }
    if (i === 2) return console.log(`Congratulations, ${userName}!`);
  }
}
