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

    let resultArray = [];
    let tempArray = [];
    let vowels = 0;
    let regexp = /[aeiouy]/gi;

    words.forEach(function(word) {
        if (word.match(regexp)) {
          tempArray = (word.match(regexp))
          resultArray.push(tempArray.length);
          vowels = resultArray.reduce((a, b) => a + b , 0);
        }
        let splitWord = word.split("");
        if (splitWord[splitWord.length - 1] === "e") {
          vowels = vowels - 1;
          console.log(vowels);
        }
      })
      return vowels;
  }

  diphthongChecker(word) {
    let diphthongArray = ("ei", "ai", "au", "oi", "ou");

    if (word.match(diphthongArray)) {
      console.log(word);
      return true;
    }
  }

}
