export class Haiku {
  constructor(lineOne, lineTwo, lineThree) {
    this.lineOne = lineOne;
    this.lineTwo = lineTwo;
    this.lineThree = lineThree;
}

  checkConsonant(lineOne) {

    let lineArray = [];
    lineArray = lineOne.split(" ");
    console.log(lineArray);
    let arrayLength = lineArray.length

    for (let i = 0; i < arrayLength; i++) {
      if (/[qwrtypsdfghjklzxcvbnm]{2,}/i.test(lineArray[i])) {
        return true;
      }
    }
  }
}
