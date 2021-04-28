var code = [];
var number = 1;
var n = 3;
var code2 = [];

function flizzBuzz() {
  if (number % 3 === 0 && number % 5 === 0) {
    code.push("fizzbuzz");
  } else if (number % 5 === 0) {
    code.push("buzz");
  } else if (number % 3 === 0) {
    code.push("fizz");
  } else {
    code.push(number);
  }

  number++;
  console.log(code);

}
