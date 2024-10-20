let goodText = document.getElementById("good-text");
let badText = document.getElementById("bad-text");
let missingText = document.getElementById("missing-text");
let textInput = document.getElementById("text-input");

let textTarget = "";
let goodIndex = 0;
let badIndex = 0;

function initTextDisplay(content) {
    textTarget = content;
    textInput.value = "";
    updateTextDisplay(textInput.value);
    textInput.addEventListener("input", (event) => updateTextDisplay(event.target.value));
}

function updateTextDisplay(inputText) {
    for (goodIndex = 0; goodIndex < textTarget.length && goodIndex < inputText.length; goodIndex++) {
        if (textTarget[goodIndex] !== inputText[goodIndex]) {
            break;
        }
    }
    badIndex = inputText.length;
    goodText.textContent = textTarget.slice(0, goodIndex);
    badText.textContent = textTarget.slice(goodIndex, badIndex);
    missingText.textContent = textTarget.slice(badIndex);
}

initTextDisplay("Bonjour la terre!");