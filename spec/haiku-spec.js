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
  });

  it('should test whether a silent e is caught in a sentence', function() {
    let newHaiku = new Haiku("this love is real", "lineTwo", "lineThree")
    expect(newHaiku.vowelCounter("this love is real")).toEqual(5)
  });

  it('will return number of vowels in a word', function() {
    let newHaiku = new Haiku("epicodus", "lineTwo", "lineThree")
    expect(newHaiku.vowelCounter("epicodus")).toEqual(4)
  });

  it('will return number of vowels in a line', function() {
    let newHaiku = new Haiku("epicodus is bananas", "lineTwo", "lineThree")
    expect(newHaiku.vowelCounter("epicodus is bananas")).toEqual(8)
  });

  it("should ignore silent vowels", function() {
    let newHaiku = new Haiku("love", "lineTwo", "lineThree")
    expect(newHaiku.vowelCounter("love")).toEqual(1)
  });

  it("should ignore diphthongs", function() {
    let newHaiku = new Haiku("height", "lineTwo", "lineThree")
    expect(newHaiku.vowelCounter("height")).toEqual(1)
  });

  it("should give the correct amount of vowels when a silent e is present", function() {
    let newHaiku = new Haiku("consolidate", "lineTwo", "lineThree")
    expect(newHaiku.vowelCounter("consolidate")).toEqual(4)
  });

  it("should check that line one has only 5 syllables", function() {
    let newHaiku = new Haiku("rainbows are awesome", "lineTwo", "lineThree")
    expect(newHaiku.vowelCounter("rainbows are awesome")).toEqual(5)
  });
});
