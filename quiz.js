// Function to check the user's answer
function checkAnswer() {
    // The correct answer
    const correctAnswer = "4";

    // Retrieve the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Reference to the feedback element
    const feedbackElement = document.getElementById("feedback");

    // Clear previous feedback style and text
    feedbackElement.textContent = "";
    feedbackElement.style.color = "";

    // Check if an option was selected
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red";
        }
    } else {
        // Handle the case where no option was selected
        feedbackElement.textContent = "Please select an answer before submitting.";
        feedbackElement.style.color = "orange";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);