// 1

// const options = ["таш", "кагаз", "кайчы"];
// let userChoice;
// let computerChoice;

// function getUserChoice() {
//     userChoice = prompt("Таш, кагаз же кайчыдан бирин тандап койгонуз (отмена үчүн cancel):").toLowerCase();
//     if (userChoice === "cancel") {
//         return;
//     } else if (!options.includes(userChoice)) {
//         alert("Дүзгүн вариант танданыз!");
//         getUserChoice();
//     }
// }

// function getComputerChoice() {
//     const randomIndex = Math.floor(Math.random() * 3);
//     computerChoice = options[randomIndex];
// }

// function determineWinner() {
//     if (userChoice === computerChoice) {
//         alert("Бир туш!");
//     } else if (
//         (userChoice === "таш" && computerChoice === "кайчы") ||
//         (userChoice === "кагаз" && computerChoice === "таш") ||
//         (userChoice === "кайчы" && computerChoice === "кагаз")
//     ) {
//         alert("Сиз утуп алдыңыз!");
//     } else {
//         alert("Компьютер утуп алды!");
//     }
// }

// getUserChoice();
// if (userChoice) {
//     getComputerChoice();
//     determineWinner();
// }




// 2

// class HangmanGame {
//     constructor(words) {
//         this.words = words;
//         this.currentWord = this.pickRandomWord();
//         this.guessedLetters = new Set();
//         this.maxWrongAttempts = 6;
//         this.wrongAttempts = 0;
//     }

//     pickRandomWord() {
//         const randomIndex = Math.floor(Math.random() * this.words.length);
//         return this.words[randomIndex].toUpperCase();
//     }

//     displayWord() {
//         let display = '';
//         for (const letter of this.currentWord) {
//             if (this.guessedLetters.has(letter)) {
//                 display += letter + ' ';
//             } else {
//                 display += '_ ';
//             }
//         }
//         return display.trim();
//     }

//     makeGuess(letter) {
//         letter = letter.toUpperCase();
//         if (this.guessedLetters.has(letter)) {
//             console.log('Бул тамга алдындачу киргизилген!');
//         } else {
//             this.guessedLetters.add(letter);
//             if (!this.currentWord.includes(letter)) {
//                 this.wrongAttempts++;
//             }
//         }
//     }

//     gameStatus() {
//         if (this.wrongAttempts >= this.maxWrongAttempts) {
//             return 'lose';
//         } else if (!this.displayWord().includes('_')) {
//             return 'win';
//         } else {
//             return 'continue';
//         }
//     }
// }

// const words = ['HELLO', 'WORLD', 'JAVASCRIPT', 'COMPUTER', 'PROGRAMMING'];
// const hangman = new HangmanGame(words);

// // Оюнду иштетүү цикли
// while (hangman.gameStatus() === 'continue') {
//     console.log('Current word: ', hangman.displayWord());
    
//     const guess = prompt('Кат киргизиңиз:');
//     if (guess === 'отмена') {
//         break;
//     }
    
//     hangman.makeGuess(guess);
//     console.log('Колдонуучунун аракеттердин саны: ', hangman.wrongAttempts);
// }

// if (hangman.gameStatus() === 'win') {
//     console.log('Табылды! Сөз: ', hangman.currentWord);
// } else {
//     console.log('Жеңилбеген! Сөз: ', hangman.currentWord);
// }

