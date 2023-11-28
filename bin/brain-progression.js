#!/usr/bin/env node

import readlineSync from 'readline-sync';

import { getName } from '../src/cli.js';

export function progression() {
  console.log('Welcome to the Brain Games!');
  const userName = getName();
  let final = [];
  console.log(`Hello, ${userName}!\nWhat number is missing in the progression?`);
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
    console.log(`Question: ${final}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === Number(toReplace)) {
      console.log('Correct!');
      final = [];
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${toReplace}'.`);
      i = 3;
    }
    if (i === 2) return `Congratulations, ${userName}!`;
    if (i === 3) return `Let's try again, ${userName}!`;
  }
}

console.log(progression());
