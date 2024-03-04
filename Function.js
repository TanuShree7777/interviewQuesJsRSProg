console.log("=================Interview Questions on function===============");
// console.log("Q1=>what is function declaration");
// function myFunc() {
//     console.log("i am function declaration")
// }
// myFunc()

// console.log("Q1=>what is function Expression");

// const myFuncExp=()=>{
//     console.log("i am function Expression and FE are assigned to a variable");
// }
// myFuncExp()


// console.log("what are first class Function?");
// console.log("In a language where a function can be treated like a variable that fn are called first class fn.In these cases fn can be passed to another fns,they can be used ,manipulated and returned from those fns and basically everything that a variable can do.");

// function Square(num) {
//     return num * num
// }

// function DisplaySquare(fn) {
//     console.log(`The square of the given no. is ${fn}`);
// }
// DisplaySquare(Square(5))

console.log("What is Immediately Invoked function Expression(IIFE)");

console.log("below function is the example here we did not invoke fn in next line,we will invoke here only with function itself.");
(function Add(num){
    console.log( num+num)
})(2)
