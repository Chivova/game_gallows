const words = ['мавпа', 'собака', 'ведмідь', 'котик', 'порося', 'зайченя', 'тюлень', 'корова', 'слон', 'півень',
    'лисиця', 'кенгуру', 'черепаха'];

const pickWord = function () { 
    return words[Math.floor(Math.random() * words.length)];
};

const setupAnswerArray = function (word) { 
    const answerArray = [];
for (let i = 0; i < word.length; i += 1) { 
    answerArray[i] = '_';
    }
    return answerArray;
};

const showPlayerProgress = function (answerArray) { 
    return alert(`Твій прогрес     ${answerArray.join(' ')}`);
};

const getGuess = function () { 
   return  prompt('Вгадай слово або натисни Cancel, щоб зупинити гру');
};

const updateGameState = function (guess, word, answerArray) { 
    guess = guess.toLowerCase();

    for (let j = 0; j < word.length; j += 1) { 
        if (word[j] === guess) {
                // remainingLetters -= 1;
               return answerArray[j] = guess;
            } 
        }
};

const showAnswerAndCongratulatePlayer = function (answerArray) {

    alert(answerArray.join(' '));
    alert(`Гарна робота! Відповідь було слово  ${word}`);
    
};
 
const word = pickWord();
const answerArray = setupAnswerArray(word);
let remainingLetters = word.length;
let remainingLives = 10;

while (remainingLetters > 0 && remainingLives > 0) { 
    showPlayerProgress(answerArray);
    remainingLives -= 1;
    let guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert('Будь-ласка введіть одну літеру');
    } else { 
        let correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}

showAnswerAndCongratulatePlayer(answerArray);