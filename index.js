function krito() {
    const choices = ["tash", "kaichy", "kagaz"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function Game() {
    let azema = 0;
    let computerScore = 0;

    while (true) {
        let userChoice = prompt("tandanyz: tash, kaichy je kagaz? (chygu uchun jazynyz 'otmena')").toLowerCase();
        while (userChoice !== "tash" && userChoice !== "kaichy" && userChoice !== "kagaz" && userChoice !== "otmena") {
            userChoice = prompt("tuura emes. dagy bir jolu araket kylyp korunuz: tash, kaichy je  kagaz? (chygu uchun 'otmena')").toLowerCase();
        }
        
        if (userChoice === "otmena") {
            break;
        }
        
        const computerChoice = krito();
       alert (`konpqter tandady: ${computerChoice}`);

        if (userChoice === computerChoice) {
            alert("chuchugulak!");
        } else if ((userChoice === "tash" && computerChoice === "kaishy") ||
                   (userChoice === "kaichy" && computerChoice === "kagaz") ||
                   (userChoice === "kagaz" && computerChoice === "tash")) {
            alert("siz jendiniz!");
            azema++;
        } else {
            alert("konpqter jendi!");
            computerScore++;
        }

        alert(`azyrky bal: siz ${azema}, konpqter ${computerScore}`);
    }

    if (azema > computerScore) {
        alert("siz jendiniz!");
    } else if (azema < computerScore) {
        alert("konpqter jendi!");
    } else {
        alert("chuchugulak!");
    } 
};

Game();






// const words = ["kooz", "keremet", "jaratylysh", "jashoo", "suktanuu"];
// let chosenWord = '';
// let guessedWord = '';
// let triesLeft = 6;
// let guessedLetters = [];

// function chooseWord() {
//     const randomIndex = Math.floor(Math.random() * words.length);
//     chosenWord = words[randomIndex];
// }

// function initializeGame() {
//     guessedWord = '_'.repeat(chosenWord.length);
//     triesLeft = 6;
//     guessedLetters = [];
// }

// function displayGameStatus() {
//     alert("soz: " + guessedWord);
//     alert("dagy bir jolu araket kylyp korunuz: " + triesLeft);
//     alert("bul tamga jazylgan: " + guessedLetters.join(', '));
// }

// function getUserGuess() {
//     let guess = prompt("tamga jazynyz:");
//     if (guess === null) {
//         return null;
//     }
//     guess = guess.toLowerCase();
//     if (!/[a-z]/.test(guess) || guess.length !== 1) {
//         alert("suranych a dan z ga cheiin bir tamga jazynyz.");
//         return getUserGuess();
//     }
//     return guess;
// }

// function updateGuessedWord(guess) {
//     let newGuessedWord = '';
//     for (let i = 0; i < chosenWord.length; i++) {
//         if (chosenWord[i] === guess) {
//             newGuessedWord += guess;
//         } else {
//             newGuessedWord += guessedWord[i];
//         }
//     }
//     guessedWord = newGuessedWord;
// }

// function playHangman() {
//     chooseWord();
//     initializeGame();

//     while (true) {
//         displayGameStatus();
//         let guess = getUserGuess();
//         if (guess === null) {
//             alert("oyun buttu.");
//             break;
//         }

//         if (guessedLetters.includes(guess)) {
//             alert("siz bul tamgany jazdynyz.");
//             continue;
//         }

//         guessedLetters.push(guess);

//         if (chosenWord.includes(guess)) {
//             updateGuessedWord(guess);
//             if (guessedWord === chosenWord) {
//                 alert("kuttuktaim! siz sozdu taptynyz: " + chosenWord);
//                 break;
//             }
//         } else {
//             triesLeft--;
//             alert("sozdo myndai tamga jok.");
//             if (triesLeft === 0) {
//                 alert("siz jenildiniz. katylgan soz bolgon: " + chosenWord);
//                 break;
//             }
//         }
//     }
// }

// playHangman();