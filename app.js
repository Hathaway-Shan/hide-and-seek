// import needed modules
import { getRandomItem, score } from './utils.js';

// state
const spots = ['tree', 'boulder', 'shed'];
let total = 0;
let wins = 0;
let spot = '';
let guessed = '';
let timeout = 0;
let losses = 0;

function handleGuess(guess) {
    // *** Implement Missing Functionality ***
    guessed = true;
    // Generate a random spot based on spots array
    spot = getRandomItem(spots);

    // Use the score function to get a result for guess and actual spot
    
    
    // (You also need to implement the score function)
    // If the result is 1 (win), increase wins state
    let currentOutcome = score(guess, spot);
    if (currentOutcome === 1) {
        wins++;
    } else {
        losses++;
    }
    // Increase total state 
    // ***
    total++;
    
    // Store the guess so we can apply special background
    guessed = guess;
    // Clear the timeout, in case user is clicking again before
    // 2 seconds
    clearTimeout(timeout);

    // update the view
    displayResults();
    displayHidingSpots();
}

// Hiding Spots Component
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

function resetClasses() {
    // reset face and guess classes
    treeButton.classList.remove('face', 'guessed');
    shedButton.classList.remove('face', 'guessed');
    boulderButton.classList.remove('face', 'guessed');
}

function displayHidingSpots() {
    // clear existing classes
    resetClasses();

    if (guessed === 'tree') {
        treeButton.classList.add('guessed');
    }
    if (guessed === 'boulder') {
        boulderButton.classList.add('guessed');
    }
    if (guessed === 'shed') {
        shedButton.classList.add('guessed');
    }

    // add face class
    if (spot === 'tree') {
        treeButton.classList.add('face');
    }
    if (spot === 'shed') {
        shedButton.classList.add('face');
    }
    if (spot === 'boulder') {
        boulderButton.classList.add('face');
    }

    // *** Implement adding the guessed ***
    // Similar to adding face class, conditionally
    // add the 'guessed' class if the guessed state
    // matches for tree, shed, or boulder
    // ***


    // Clear the face and guessed classes after two seconds
    // store the timeout so we can clear if user makes
    // another guess before 2 seconds
    timeout = setTimeout(resetClasses, 2000);
}

treeButton.addEventListener('click', () => {
    handleGuess('tree');
});

boulderButton.addEventListener('click', () => {
    handleGuess('boulder');
});

shedButton.addEventListener('click', () => {
    handleGuess('shed');
});


// Results Component

// *** Implement the Results Component! ***
// 1. Reference needed DOM elements
// 2. Implement the displayResults function that updates
//    the component total, winds, and losses
//    (derive losses from totals and wins)
// ***
function displayResults() {
    const winsDisplay = document.getElementById('wins-display');
    winsDisplay.textContent = wins;
    const lossesDisplay = document.getElementById('losses-display');
    lossesDisplay.textContent = losses;
    const totalDisplay = document.getElementById('total-display');
    totalDisplay.textContent = total;
}


// page load actions
displayHidingSpots();
displayResults();
