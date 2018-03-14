export class Haiku {
  constructor(lineOne, lineTwo, lineThree) {
    this.lineOne = lineOne;
    this.lineTwo = lineTwo;
    this.lineThree = lineThree;
}

  checkConsonant(lineOne) {

    let lineArray = [];
    lineArray = lineOne.split(" ");
    let arrayLength = lineArray.length
    let multConsonant = [];
    let noMultConsonant = [];

    for (let i = 0; i < arrayLength; i++) {
      if (/[qwrtypsdfghjklzxcvbnm]{2,}/i.test(lineArray[i])) {
        multConsonant.push(lineArray[i]);
      } else
        noMultConsonant.push(lineArray[i]);
        console.log(noMultConsonant);
    }
  }
}
