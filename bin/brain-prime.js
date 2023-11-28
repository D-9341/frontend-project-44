#!/usr/bin/env node

import readlineSync from 'readline-sync';

import { getName } from '../src/cli.js';

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

export function primeNumber() {
  console.log('Welcome to the Brain Games!');
  const userName = getName();
  console.log(`Hello, ${userName}!\nAnswer "yes" if given number is prime. Otherwise answer "no".`);
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (isPrime(number)) {
      if (answer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
        i = 3;
      }
    } else {
      if (answer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
        i = 3;
      }
    }
    if (i === 2) return `Congratulations, ${userName}!`;
    if (i === 3) return `Let's try again, ${userName}!`;
  }
}

console.log(primeNumber());
