#!/usr/bin/env node

import readlineSync from 'readline-sync';

import { getName } from '../src/cli.js';

export function evenness() {
  console.log('Welcome to the Brain Games!');
  const userName = getName();
  console.log(`Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
  for (let i = 0; i < 3; i += 1) {
    const num = Math.round(Math.random() * 100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (num % 2 === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
        i = 3;
      }
    } else if (answer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      i = 3;
    }
    if (i === 2) return `Congratulations, ${userName}!`;
    if (i === 3) return `Let's try again, ${userName}!`;
  }
}

console.log(evenness());
