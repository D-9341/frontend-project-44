#!/usr/bin/env node

import readlineSync from 'readline-sync';

import { getName } from "../src/cli.js";

export function calculator() {
    console.log('Welcome to the Brain Games!');
    var userName = getName()
    console.log(`Hello, ${userName}!\nWhat is the result of the expression?`);
    for (let i = 0; i < 3; i += 1) {
        var first = Math.round(Math.random() * 10)
        var second = Math.round(Math.random() * 10)
        var choices = ['+', '-', '*']
        var choice = choices[Math.floor(choices.length * Math.random())]
        console.log(`Question: ${first} ${choice} ${second}`);
        var answer = readlineSync.question('Your answer: ')
        if (choice === '+') {
            if (first + second === Number(answer)) {
                console.log('Correct!');
            } else { 
                console.log(`'${answer}' is wrong answer ;(. Correct answer was '${first + second}'.`)
                i = 3
            }
        } else if (choice === '-') {
            if (first - second === Number(answer)) {
                console.log('Correct!');
            } else { 
                console.log(`'${answer}' is wrong answer ;(. Correct answer was '${first - second}'.`)
                i = 3
            }
        } else if (choice === '*') {
            if (first * second === Number(answer)) {
                console.log('Correct!');
            } else { 
                console.log(`'${answer}' is wrong answer ;(. Correct answer was '${first * second}'.`)
                i = 3
            }
        }
        if (i === 2) return `Congratulations, ${userName}!`
        else if (i === 3) return `Let's try again, ${userName}!`
    }
}
