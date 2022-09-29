function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');

/*
console.log (hello)
console.log (Dojo)
*/


function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);

/*

// console.log=15

diagrama de t 
variable          valores
result          |    15
*/

function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);
/*

//console.log=18

diagrama de t 
variable        valores
result          | 18
*/

var num = 15;
console.log(num);
function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);
/*

//console.log(num)15
console.log(num2)10
console.log(result)10
console.log(num)15

diagrama de t 
variable      valores
num          |  15
result       |  10
*/

var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);

/*

//console.log (result) 20
console.log (num) 15

diagrama de t 
variable         valores
result          |  20
num             |  15
*/

function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);

/* 

// console.log (num is, num) 6
console.log (result is, result) 16

diagrama de t 
variables          valores
y                | 6
result           | 16
*/

function sumNums(num1, num2) {  
    return num1+num2;
 }
 console.log(sumNums(2,3))
 console.log(sumNums(3,5))

 /*

 //console.log(sumNums) 5
 console.log (sunNums) 8
 */

 function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
 }
 console.log(printSumNums(2,3))
 console.log(printSumNums(3,5))

 /* 
 //console.log(num1) 2

console.log(printSunNums) 5
console.log(printSunNums) 8
*/

function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);

/*
//console.log(sum is num) 5 + 8
console.log (result is result) 13

diagrama de t 
variables         valores
sum            |    5+8=13
result         |    13

*/

function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);

/*

//console.log (sum is 5) 
console.log (result is result )19

diagrama de t
variables       valores
sum        |  5 + 3 + 3 + 3 + 5
result     | 19