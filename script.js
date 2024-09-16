const subjects = [
    "You",
    "Your efforts",
    "Your journey",
    "The path you are on",
    "Your dedication",
    "The work you put in",
    "Your positive attitude",
    "Your strength",
    "Your commitment",
    "The progress you make"
];

const verbs = [
    "will lead to",
    "is paving the way for",
    "is bringing you closer to",
    "is setting you up for",
    "is creating opportunities for",
    "is driving you toward",
    "is building a foundation for",
    "is making way for",
    "is positioning you for",
    "is guiding you toward"
];

const objects = [
    "success",
    "greatness",
    "your goals",
    "amazing things",
    "positive outcomes",
    "new achievements",
    "incredible results",
    "fulfillment",
    "positive change",
    "a bright future"
];

const endings = [
    "Keep going strong!",
    "Believe in yourself!",
    "You are on the right track!",
    "Your efforts are paying off!",
    "Stay focused and positive!",
    "Every day is a step closer!",
    "You're doing amazing!",
    "Don't stop now!",
    "Your future is bright!",
    "You're making great progress!"
];

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function generateRandomMessage() {
    const subject = getRandomElement(subjects);
    const verb = getRandomElement(verbs);
    const object = getRandomElement(objects);
    const ending = getRandomElement(endings);

    return `${subject} ${verb} ${object}. ${ending}`;
}

document.getElementById('generate').addEventListener('click', function() {
    document.getElementById('message').textContent = generateRandomMessage();
});

// Optionally, generate a message on page load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('message').textContent = generateRandomMessage();
});
