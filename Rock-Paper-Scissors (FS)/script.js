let userScore = 0;
let compScore = 0;

const choices = ['rock', 'paper', 'scissors'];

// Elements
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const message_p = document.getElementById('message');
const subMessage_p = document.getElementById('sub-message');
const reset_btn = document.getElementById('reset-btn');

const choiceButtons = document.querySelectorAll('.choice-btn');

// Computer Logic
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Game Logic
function play(userChoice) {
    const compChoice = getComputerChoice();
    
    switch (userChoice + "-" + compChoice) {
        // User Wins
        case "rock-scissors":
        case "paper-rock":
        case "scissors-paper":
            win(userChoice, compChoice);
            break;
        // User Loses
        case "rock-paper":
        case "paper-scissors":
        case "scissors-rock":
            lose(userChoice, compChoice);
            break;
        // Draw
        default:
            draw(userChoice, compChoice);
            break;
    }
}

function win(user, comp) {
    userScore++;
    userScore_span.innerHTML = userScore;
    message_p.innerHTML = "YOU WIN! 🎉";
    subMessage_p.innerHTML = `${user} beats ${comp}.`;
    message_p.style.color = "#28a745";
}

function lose(user, comp) {
    compScore++;
    compScore_span.innerHTML = compScore;
    message_p.innerHTML = "YOU LOST! 💀";
    subMessage_p.innerHTML = `${comp} beats ${user}.`;
    message_p.style.color = "#dc3545";
}

function draw(user, comp) {
    message_p.innerHTML = "IT'S A DRAW! 🤝";
    subMessage_p.innerHTML = `Both chose ${user}.`;
    message_p.style.color = "#ffc107";
}

// Reset Logic
reset_btn.addEventListener('click', () => {
    userScore = 0;
    compScore = 0;
    userScore_span.innerHTML = 0;
    compScore_span.innerHTML = 0;
    message_p.innerHTML = "Make your move!";
    subMessage_p.innerHTML = "Scores have been reset.";
    message_p.style.color = "#333";
});

// Event Listeners for Buttons
choiceButtons.forEach(button => {
    button.addEventListener('click', () => play(button.id));
});