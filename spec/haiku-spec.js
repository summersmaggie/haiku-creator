import { Haiku } from  '../src/haiku.js';

describe('Haiku', function() {
  it('should test whether an input has three lines', function() {
    let newHaiku = new Haiku("lineOne", "lineTwo", "lineThree")
    expect(newHaiku.lineOne).toEqual("lineOne")
    expect(newHaiku.lineTwo).toEqual("lineTwo")
    expect(newHaiku.lineThree).not.toEqual(" ")
  });

  it('should test whether each line has more than two consonants in a row', function() {
    let newHaiku = new Haiku("epicodus buffet", "lineTwo", "lineThree")
    expect(newHaiku.checkConsonant("epicodus buffet")).toEqual(["buffet"])
    console.log(newHaiku);
  });

  // it('should test whether each word in a line has more than two consonants in a row', function() {
  //   let newHaiku = new Haiku("the buffet is awesome", "lineTwo", "lineThree")
  //   expect(newHaiku.checkConsonant("the buffet is awesome")).toEqual(false)
  // });

});
