let missingLetters = 0;

function buildStage() {
    let word = document.getElementById("word").value;
    word.toLowerCase();
    console.log(word);
    document.getElementById("introduction").style.display = 'none';
    document.getElementById("hangmanStage").style.display = 'block';
    let firstLetter = word[0];
    let lastLetter = word[word.length - 1];
    let wordPreview = document.getElementById("wordPreview");
    for (var i = 0; i < word.length; ++i) {
        if (word[i] === firstLetter) {
            wordPreview.innerHTML += word[i];
        } else if (word[i] === lastLetter) {
            wordPreview.innerHTML += word[i];
        } else {
            wordPreview.innerHTML += '_';
            ++missingLetters;
        }
    }
    console.log(missingLetters);
}

function addLetter(letter) {

}