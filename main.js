var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                     "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var string = "";

function stackLetters(letterArray) {
  for (var i = 0; i < letterArray.length; i++) {
    if (i !== 0 && i % 3 === 0) {
      string += " ";
    }
    string += letterArray[i];
    console.log(string);
  }
}

stackLetters(alphabetArray);
