import readlineSync from 'readline-sync';

import { getName } from "../src/cli.js";

export function evenness() {
    console.log('Welcome to the Brain Games!');
    var userName = getName()
    console.log(`Hello, ${userName}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        var num = Math.round(Math.random() * 100)
        console.log(`Question: ${num}`);
        var answer = readlineSync.question('Your answer: ')
        if (num % 2 === 0) {
            if (answer === 'yes') {
                console.log('Correct!')
            } else return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`)
        } else if (num % 2 !== 0) {
            if (answer === 'no') {
                console.log('Correct!')
            } else return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`)
        }
        if (i === 2) return `Congratulations, ${userName}!`
    }
}

console.log(evenness());