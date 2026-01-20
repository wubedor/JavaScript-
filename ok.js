// List of words to choose from
const words = ["jascript", "python", "html", "css", "react", "node", "angular"];

// Select a random word from the list
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let attempts = 5;

// Update the word display
function updateWordDisplay() {
    let displayWord = "";
    for (let letter of selectedWord) {
        if (guessedLetters.includes(letter)) {
            displayWord += letter + " ";
        } else {
            displayWord += "_ ";
        }
    }
    document.getElementById("word").textContent = displayWord.trim();
}

// Handle the player's letter guess
function guessLetter() {
    const input = document.getElementById("letterInput").value.toLowerCase();
    if (input.length !== 1 || !/[a-z]/.test(input)) {
        alert("Please enter a valid letter.");
        return;
    }


    // Check if the letter has already been guessed
    if (guessedLetters.includes(input)) {
        alert("You've already guessed that letter.");
        return;
    }

    // Add the guessed letter to the guessed letters list
    guessedLetters.push(input);

    // Check if the letter is in the word
if (selectedWord.includes(input)) {
    updateWordDisplay();
} else {
    attempts--;
    document.getElementById("attempts").textContent = attempts;
    if (attempts <= 0) {
        document.body.classList.add('red-flash');
        document.getElementById("failSound").play();
        setTimeout(() => {
            document.body.classList.remove('red-flash');
        }, 1000);

        alert("Game Over! You lost! The word was: " + selectedWord);
        resetGame();
        return;
    }
}

// Check if the player has guessed all letters
if (!document.getElementById("word").textContent.includes("_")) {
    document.body.classList.add('green-flash');
    document.getElementById("successSound").play();
    setTimeout(() => {
        document.body.classList.remove('green-flash');
    }, 1000);

    alert("Congratulations! You've guessed the word: " + selectedWord);
    resetGame();
}

    // Clear the input field
    document.getElementById("letterInput").value = "";
    document.getElementById("letterInput").focus();
}

// Reset the game
function resetGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    attempts = 5;
    document.getElementById("attempts").textContent = attempts;
    updateWordDisplay();
}

// Initial game setup
updateWordDisplay();