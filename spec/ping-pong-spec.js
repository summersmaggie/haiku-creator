import { pingPong } from  '../src/ping-pong.js';

describe('pingPong', function() {
  it('should test whether an input number has an equal number of output elements', function() {
    var goal = new pingPong(15)
    expect(goal.length).toEqual(15)
  });
  it('should test whether an input of 15 returns ping-pong at the 15th position', function() {
    var goal = new pingPong(15)
    expect(goal[14]).toEqual('ping-pong')
  });
  it('should return ping for an input of 3', function() {
    var goal = new pingPong(3)
    debugger
    expect(goal[2]).toEqual('ping')
  });
  it('should return ping for an input of 3', function() {
    var goal = new pingPong(3)
    expect(goal).toEqual([1, 2, 'ping'])
  });
});
