import { Haiku } from  '../src/haiku.js';

describe('Haiku', function() {
  it('should test whether an input has three lines', function() {
    var newHaiku = new Haiku("lineOne", "lineTwo", "lineThree")
    expect(newHaiku.lineOne).toEqual("lineOne")
    expect(newHaiku.lineTwo).toEqual("lineTwo")
    expect(newHaiku.lineThree).not.toEqual(" ")
  });
});
