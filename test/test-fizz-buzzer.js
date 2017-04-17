const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


describe('fizzBuzzer', function() {

  it('should return fizz when divisible by 3, buzz when divisible by 5, and fizz-buzz if divisible by 3 and 5, otherwise number', function() {
    const fizzIn = [3, 9, 12];
    const buzzIn = [5, 10, 20];
    const fizzBuzzIn = [15, 30, 45];
    const otherIn = [1, 17, 22];

    fizzIn.forEach(function(input) {
      const answer = fizzBuzzer(input)
        fizzBuzzer(input).should.equal('fizz');
    });

    buzzIn.forEach(function(input) {
      const answer = fizzBuzzer(input)
        fizzBuzzer(input).should.equal('buzz');
    });

    fizzBuzzIn.forEach(function(input) {
      const answer = fizzBuzzer(input)
        fizzBuzzer(input).should.equal('fizz-buzz');
    })

      otherIn.forEach(function(input) {
      const answer = fizzBuzzer(input)
        fizzBuzzer(input).should.equal(input);
    });
  })
})

  it('should raise error if input is not number', function() {
    const badInputs = ['a', null, false, {}, 'hei'];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });