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

    // Count occurrences of each choice
    const choiceCounts = { rock: 0, paper: 0, scissors: 0 };
    
    userChoices.forEach(choice => {
        choiceCounts[choice]++;
    });

    // Determine the most frequent choice
    let predictedChoice;
    if (choiceCounts.rock > choiceCounts.paper && choiceCounts.rock > choiceCounts.scissors) {
        predictedChoice = 'rock'; // User is likely to play rock
    } else if (choiceCounts.paper > choiceCounts.rock && choiceCounts.paper > choiceCounts.scissors) {
        predictedChoice = 'paper'; // User is likely to play paper
    } else {
        predictedChoice = 'scissors'; // User is likely to play scissors
    }

    // Predict the computer's counter choice
    const prediction = predictedChoice === 'rock' ? 'paper' : predictedChoice === 'paper' ? 'scissors' : 'rock';
    document.getElementById('prediction').innerText = `Based on your patterns, I predict you will choose: ${predictedChoice}. I will counter with: ${prediction}.`;
}
