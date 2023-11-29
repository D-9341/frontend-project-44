import getName from './cli.js';

console.log('Welcome to the Brain Games!');
const userName = getName();

export function logic() {
  return `Hello, ${userName}!`;
}

export { userName };
