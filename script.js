// Function to log weight
function logWeight() {
    const date = document.getElementById("weight-date").value;
    const weight = document.getElementById("weight-input").value;

    if (date && weight) {
        const weightLog = document.getElementById("weight-log");
        const logEntry = document.createElement("div");
        logEntry.textContent = `Date: ${date}, Weight: ${weight} kg`;
        weightLog.appendChild(logEntry);

        // Save to local storage
        let storedWeights = JSON.parse(localStorage.getItem("weightLog")) || [];
        storedWeights.push({ date, weight });
        localStorage.setItem("weightLog", JSON.stringify(storedWeights));
    }
}

// Function to log exercise
function logExercise() {
    const date = document.getElementById("exercise-date").value;
    const exercise = document.getElementById("exercise-name").value;
    const duration = document.getElementById("exercise-duration").value;

    if (date && exercise && duration) {
        const exerciseLog = document.getElementById("exercise-log");
        const logEntry = document.createElement("div");
        logEntry.textContent = `Date: ${date}, Exercise: ${exercise}, Duration: ${duration} minutes`;
        exerciseLog.appendChild(logEntry);

        // Save to local storage
        let storedExercises = JSON.parse(localStorage.getItem("exerciseLog")) || [];
        storedExercises.push({ date, exercise, duration });
        localStorage.setItem("exerciseLog", JSON.stringify(storedExercises));
    }
}

// Load stored logs when the page loads
window.onload = function() {
    const weightLog = JSON.parse(localStorage.getItem("weightLog")) || [];
    const exerciseLog = JSON.parse(localStorage.getItem("exerciseLog")) || [];

    weightLog.forEach(entry => {
        const weightLogDiv = document.getElementById("weight-log");
        const logEntry = document.createElement("div");
        logEntry.textContent = `Date: ${entry.date}, Weight: ${entry.weight} kg`;
        weightLogDiv.appendChild(logEntry);
    });

    exerciseLog.forEach(entry => {
        const exerciseLogDiv = document.getElementById("exercise-log");
        const logEntry = document.createElement("div");
        logEntry.textContent = `Date: ${entry.date}, Exercise: ${entry.exercise}, Duration: ${entry.duration} minutes`;
        exerciseLogDiv.appendChild(logEntry);
    });
};
