function convertToUpperCase() {
    let text = document.getElementById("inputText").value;
    document.getElementById("result").innerText = text.toUpperCase();
}

function convertToLowerCase() {
    let text = document.getElementById("inputText").value;
    document.getElementById("result").innerText = text.toLowerCase();
}

function convertToTitleCase() {
    let text = document.getElementById("inputText").value.toLowerCase();
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    document.getElementById("result").innerText = words.join(" ");
}

function convertToSentenceCase() {
    let text = document.getElementById("inputText").value.toLowerCase();
    let sentences = text.split(/([.!?]\s*)/);
    for (let i = 0; i < sentences.length; i++) {
        if (sentences[i].length > 0) {
            sentences[i] = sentences[i][0].toUpperCase() + sentences[i].substring(1);
        }
    }
    document.getElementById("result").innerText = sentences.join("");
}

function convertToRandomCase() {
    let text = document.getElementById("inputText").value;
    let result = "";
    for (let i = 0; i < text.length; i++) {
        if (Math.random() > 0.5) {
            result += text[i].toUpperCase();
        } else {
            result += text[i].toLowerCase();
        }
    }
    document.getElementById("result").innerText = result;
}
