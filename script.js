let userChoices = [];
const choices = ['rock', 'paper', 'scissors'];

document.querySelectorAll('.options button').forEach(button => {
    button.addEventListener('click', (e) => {
        const userChoice = e.target.id;
        userChoices.push(userChoice);
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
        document.getElementById('result').innerText = `You chose: ${userChoice}. Computer chose: ${computerChoice}. Result: ${result}`;
        predictNextChoice();
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return "It's a draw!";
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    }
    return 'Computer wins!';
}

function predictNextChoice() {
    if (userChoices.length < 2) {
        document.getElementById('prediction').innerText = 'No prediction available.';
        return;
    }

    const lastChoice = userChoices[userChoices.length - 1];
    const prediction = lastChoice === 'rock' ? 'paper' : lastChoice === 'paper' ? 'scissors' : 'rock';
    document.getElementById('prediction').innerText = `Based on your last choice, I predict you will choose: ${prediction}`;
}
