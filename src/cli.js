import readlineSync from 'readline-sync';

export function getName() {
    return readlineSync.question('May I have your name? ')
}
