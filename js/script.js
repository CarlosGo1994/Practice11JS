'use strict'

/*this a program where you can introduce two numbers and it'll show which is greater and which is smaller*/

var first_number = parseInt(prompt("Input the first Integer number",0));
var second_number = parseInt(prompt("Input the second Integer number",0));

while(first_number <= 0 || second_number <= 0 || isNaN(first_number) || isNaN(second_number))
{
     first_number = parseInt(prompt("Input the first Integer number",0));
     second_number = parseInt(prompt("Input the second Integer number",0));

}


if(first_number > second_number)
{
    alert(first_number + " is greater\n " + second_number + " is smaller");
}
 else if (second_number > first_number) 
 {
     alert(second_number + " is greater\n" + first_number +" is smaller");
 } 
 else if(first_number == second_number)
 {
     alert("The numbers are equals");
 }
 else
 {
    alert("Introduce correct numbers");
 }

/*

let add = first_number + second_number;

console.log(first_number);
console.log(second_number);
console.log("La suma es " + add);

alert("The addition is " + add);
*/