export class Haiku {
  constructor(lineOne, lineTwo, lineThree) {
    this.lineOne = lineOne;
    this.lineTwo = lineTwo;
    this.lineThree = lineThree;
}

  checkConsonant(lineOne) {
    let words = [];
    words = lineOne.split(" ");
    // let arrayLength = words.length
    let multConsonant = [];
    let noMultConsonant = [];

    words.forEach(function(word) {
      if (/[qwrtypsdfghjklzxcvbnm]{2,}/i.test(word)) {
        multConsonant.push(word);
      } else
        noMultConsonant.push(word);
    })
    return multConsonant;
  }

  vowelCounter(lineOne) {
    let words = [];
    words = lineOne.split(" ");

    let totalArray = [];
    let vowelsArray = [];
    let wordVowels = 0;
    let regexp = /[aeiouy]/gi;
    let syllables = 0;

    words.forEach(function(word) {
        if (word.match(regexp)) {
          vowelsArray = (word.match(regexp))
          wordVowels = vowelsArray.length;
        }
        if (word.includes("ei" || "ai" || "au" || "oi" || "ou")) {
          wordVowels = wordVowels - 1;
        }
        let splitWord = word.split("");
        if (splitWord[splitWord.length - 1] === "e") {
          wordVowels = wordVowels - 1;
        }
        totalArray.push(wordVowels);
      })
      syllables = totalArray.reduce((a, b) => a + b , 0);
    return syllables;
  }

  // haikuChecker(lineOne, lineTwo, lineThree) {
  //   something = lineOne.vowelCounter()
  //
  //
  //   if lineOne === 5
  //
  // }
}
