const words = ['мавпа', 'собака', 'ведмідь', 'котик', 'порося', 'зайченя', 'тюлень', 'корова', 'слон', 'півень', 'лисиця', 'кенгуру', 'черепаха'];
// выбор случайного слова
const word = words[Math.floor(Math.random() * words.length)];
// console.log(word);
// массив для ответов
const answerArray = [];
for (let i = 0; i < word.length; i += 1) { 
    answerArray[i] = '_';
}

let remainingLetters = word.length;
// console.log(answerArray);
let remainingLives = 10;
// Цикл игры
while (remainingLetters > 0 && remainingLives > 0) { 
// Показываем игроку его прогресс
    alert(`Твій прогрес     ${answerArray.join(' ')}`);
    remainingLives -= 1;
    // Вариант ответа от игрока
    let guess = prompt('Вгадай слово або натисни Cancel, щоб зупинити гру');
    
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert('Будь-ласка введіть одну літеру');
    }  
        guess = guess.toLowerCase();
        // Обновляяем процесс игры с помощью переменной guess
        for (let j = 0; j < word.length; j += 1) { 
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters -= 1;
            } 
        }

    // Конец цикла игры
}
// Показываем ответ и приветствуем игрока
alert(answerArray.join(' '));
alert(`Гарна робота! Відповідь було слово  ${word}`);