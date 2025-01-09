// JavaScript code to make the calculator operational

// Arithmetic operation functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

// Function to update the result
function updateResult(value) {
    document.getElementById("calculation-result").textContent = value;
}

// Event listeners for each operation
document.getElementById("add").addEventListener("click", function () {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = add(number1, number2);
    updateResult(result);
});

document.getElementById("subtract").addEventListener("click", function () {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = subtract(number1, number2);
    updateResult(result);
});

document.getElementById("multiply").addEventListener("click", function () {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = multiply(number1, number2);
    updateResult(result);
});

document.getElementById("divide").addEventListener("click", function () {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = divide(number1, number2);
    updateResult(result);
});
