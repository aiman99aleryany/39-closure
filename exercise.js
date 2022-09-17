// Write a new closure: create a function called multiplyByTwo that takes is one parameter. Inside the multiplyByTwo function, create a function called inner. This function will take care of multiplying the parameter passed as input by the variable named number Print in the console the function output.

// function multiplyByTwo(value) {
//   let number = 2;
// //....

// }

function multiplyByTwo(value) {
  let number = 2;
  function inner() {
    return value * number;
  }
  return inner;
}

console.log(multiplyByTwo(1)());
