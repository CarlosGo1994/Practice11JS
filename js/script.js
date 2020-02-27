'use strict'

/*this a program where you can introduce two numbers and it'll show which is greater and which is smaller*/

let first_number = parseInt(prompt("Input the first Integer number",0));
let second_number = parseInt(prompt("Input the second Integer number",0));

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

/*

let add = first_number + second_number;

console.log(first_number);
console.log(second_number);
console.log("La suma es " + add);

alert("The addition is " + add);
*/