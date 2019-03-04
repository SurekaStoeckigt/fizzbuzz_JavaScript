describe("FizzBuzz", function() {

var fizzBuzz;

beforeEach(function() {
fizzBuzz = new FizzBuzz();
});

describe('returns normal number', function(){

  it("should return 1 for 1", function(){
    expect(fizzBuzz.play(1)).toEqual(1)
    });

  });

  describe('is divisible by 3', function(){

    it("should return Fizz for 3", function(){
      expect(fizzBuzz.play(3)).toEqual("Fizz")
      });

    });

    describe('is divisible by 5', function(){

      it("should return Buzz for 5", function(){
        expect(fizzBuzz.play(5)).toEqual("Buzz")
        });

      });

      describe('is divisible by 15', function(){

        it("should return FizzBuzz for 15", function(){
          expect(fizzBuzz.play(15)).toEqual("FizzBuzz")
          });

        });
});
