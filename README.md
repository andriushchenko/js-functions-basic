Завдання

isBigger - a function which accepts two arguments and returns true if first one has greater value than second one or false otherwise. 
E.g: isBigger(5, -1); // => true
Tip: no need for if/else clause nor ternary operator


isSmaller - a function which accepts two arguments and returns true if first one has lesser value than second one or false otherwise.
E.g. isSmaller(5, -1); // => false
Tip: consider reusing isBigger function
    
getMin - a function which accepts arbitrary number of integer arguments and returns the one with the smallest value.
E.g. getMin(3, 0, -3); // => -3
Tip: since arguments is like array, you can use simple iteration over it
and use arguments[ i ] to get the argument of a given index

isPrime - a function which accepts one integer argument and returns true if it is prime number or false otherwise (http://www.mathsisfun.com/definitions/prime-number.html).
E.g. isPrime(5); // => true

getClosestToZero - a function which accepts arbitrary number of integer arguments and returns one closest to 0 (zero).
E.g. getClosestToZero(9, 5, -4, -9); // => -4
    Tip: Math.abs() might be helpful


BONUS, means this task is not obligatory.
guessingGame - rewrite guess a number game (https://goo.gl/3FqoBd) using functions.
The main idea is to refactor your previous code so it become reusable and more readable.