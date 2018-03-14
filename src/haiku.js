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
}
