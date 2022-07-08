// The acts of the mind wherein it exerts its power over simple ideas are chiefly these three.
// 1. Combining all simple ideas into complex ones and thus all complex ideas are made.
// 2. Bringing two ideas whether simple or complex, together, and setting them by one another so as to take view of them at once, without uniting them into one.
// 3. The third is seperating them from all other ideas that accompany them in real existance: this is called abstraction, and thus all its general ideas are made.
//      - John Locke, An essay concerning human understanding (1690)


//  Exercise 1.2
// (5+4+(2-(3-(6+4/5))))/(3*(6-2)*(2-7))

// Exercise 1.3
// Declare a function that takes three numbers as arguments and returns the sum of squares of the two larger numbers.

let square = (a)=>a*a;
let ss = (a,b)=>square(a)+square(b);
function requiredFunction(a,b,c){
  return a>b?ss(a,c):a>c?ss(a,b):ss(b,c);
}

// console.log(requiredFunction(2,3,4));
let plus = (a,b)=>a+b;
let minus = (a,b)=>a-b;
let a_plus_abs_b = (a,b)=>(b>=0?plus:minus)(a,b);
// console.log(a_plus_abs_b(5,-4));

// Exercise 1.5
// Figure out is the interpreter used is using applicative-order evaluation or normal order evaluation
function p(){
  return p();
}

function test(x,y){
  return x===0?0:y;
}

// console.log(test(0,p()));
// We observe that the above line throws a stack overflow error
// In applicative order we need to evaluate the argument expressions first before we can evaluate the complete function.
// This will throw the error as the value of p() is erronous.
// In the normal order of execution on encountering the first argument as zero the interpreter would have run the function body first and the function would return 0.
// This shows that the node interpreter uses applicative order.

// Let us use newton's method to find the square root of a number
function square_root(guess,n){
  return is_good_enough(guess,n)?guess:square_root(improve(guess,x),x);  
}

function is_good_enough(guess,n){
  return abs(square(guess)-n)<0.001;
}

function improve(guess,x){
  return average(guess,x/guess);
}

function average(a,b){
  return (a+b)/2;
}

function sqrt(x){
  return square_root(1,x);
}