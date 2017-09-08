// const should = require('chai').should();
//
// const fizzBuzzer = require('../fizzBuzzer');
//
//
// describe('fizzBuzzer', function() {
//
//   it('should return fizz when divisible by 3, buzz when divisible by 5, and fizz-buzz if divisible by 3 and 5, otherwise number', function() {
//     const fizzIn = [3, 9, 12];
//     const buzzIn = [5, 10, 20];
//     const fizzBuzzIn = [15, 30, 45];
//     const otherIn = [1, 17, 22];
//
//     fizzIn.forEach(function(input) {
//       const answer = fizzBuzzer(input)
//         fizzBuzzer(input).should.equal('fizz');
//     });
//
//     buzzIn.forEach(function(input) {
//       const answer = fizzBuzzer(input)
//         fizzBuzzer(input).should.equal('buzz');
//     });
//
//     fizzBuzzIn.forEach(function(input) {
//       const answer = fizzBuzzer(input)
//         fizzBuzzer(input).should.equal('fizz-buzz');
//     })
//
//       otherIn.forEach(function(input) {
//       const answer = fizzBuzzer(input)
//         fizzBuzzer(input).should.equal(input);
//     });
//   })
// })
//
//   it('should raise error if input is not number', function() {
//     const badInputs = ['a', null, false, {}, 'hei'];
//     // prove that an error is raised for bad inputs
//     badInputs.forEach(function(input) {
//       (function() {
//           fizzBuzzer(input)
//       }).should.throw(Error);
//     });
//   });


const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe ('fizzBuzzer', function(){
  it('should return "fizz" when number tested is divisible by 3', function(){
      let fizzTestInput = [3, 9, 12];
      fizzTestInput.forEach(function(e){
        fizzBuzzer(e).should.equal('fizz');
      })
  })
  it('should return "buzz" when number tested is divisible by 5', function(){
      let fizzTestInput = [5, 10, 20];
      fizzTestInput.forEach(function(e){
        fizzBuzzer(e).should.equal('buzz');
      })
  })
  it('should return "fizz-buzz" when number tested is divisible by 15', function(){
      let fizzTestInput = [15, 30, 60];
      fizzTestInput.forEach(function(e){
        fizzBuzzer(e).should.equal('fizz-buzz');
      })
  })
  it('should return number when number tested is divisible by none of the above', function(){
      let fizzTestInput = [1, 2, 22];
      fizzTestInput.forEach(function(e){
        fizzBuzzer(e).should.equal(e);
      })
  })
  it('should throw error if input is not a number', function(){
    let fizzTestInput = ['a', '=', undefined];
    fizzTestInput.forEach(function(e){
      (function(){fizzBuzzer(e)}).should.throw(Error);
    })
  })
})
