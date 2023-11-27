#!/usr/bin/env node

import readlineSync from 'readline-sync';

import { getName } from "../src/cli.js";

export function greatestCommonDivisor() {
    console.log('Welcome to the Brain Games!');
    var userName = getName()
    console.log(`Hello, ${userName}!\nFind the greatest common divisor of given numbers.`);
    for (let i = 0; i < 3; i += 1) {
        var first = Math.round(Math.random() * 100)
        var second = Math.round(Math.random() * 100)
        console.log(`Question: ${first} ${second}`);
        var answer = readlineSync.question('Your answer: ')
        let result = 0;
        while (first && second) {
            if (first > second) {
                first -= second
            } else {
                second -= first
            }
            result = first + second
        }
        if (Number(answer) === result) {
            console.log('Correct!')
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`)
            i = 3
        }
        if (i === 2) return `Congratulations, ${userName}!`
        else if (i === 3) return `Let's try again, ${userName}!`
    }
}
