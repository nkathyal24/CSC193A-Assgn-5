//Nonika Kathyal
// CSC 193A - Assignment #5

// Function to make the text bigger
function makeTextBigger() {
  document.getElementById("textArea").style.fontSize = "24pt";
}

// Function to change the text based on the selected button
function fancifyText() {
  let textArea = document.getElementById("textArea");

  if (document.getElementById("fancyShmancy").checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else if (document.getElementById("boringBetty").checked) {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

// Function to add a suffix of "-Moo" to the last word of each sentence.
function mooifyText() {
  let textArea = document.getElementById("textArea");
  textArea.value = textArea.value.toUpperCase();

  let sentences = textArea.value.split(".");
  for (let i = 0; i < sentences.length - 1; i++) {
    sentences[i] = sentences[i] + "-Moo";
  }
  textArea.value = sentences.join(".");
}
