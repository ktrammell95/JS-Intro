// Consider the following code fragment

var a = "3";
var b = 2;
var c = b + a;


// Q: What is the value of c?
// 23


// Write to the best if your understanding
// why c is the value that it is.

// c is 23 because the script pull the value of 2 as a number 
// and then adds the string value of a (3) to the line


var str = "Version " + 5 + 1;


// Q: What is the value of str?
// Version 51

// Write to the best if your understanding
// why str is the value that it is. How could
// it be altered to result in 6 instead of 51?

// The script pulls the string "version" and leaves it as it is
// it then pulls the 5 + 1 and puts them together because the line 
// started with a string so it considers them as strings also

// To alter this to read Version 6 the script should look like this:
// var str = "Version " + (5 + 1);


