
// four methods to convert string into number 

// method one 
// let a = prompt("Enter the value for 'a' :");
// let b = prompt("Enter the value for 'b':");
// let num1 = Number(a)
// let num2 = Number(b)
// let result = num1 + num2
// console.log(result);


// method two 
// let a = Number(prompt("Enter the value for 'a':"));
// let b = Number(prompt("Enter the value for 'b':"));
// let result = a + b;
// console.log(result);


// third method 
// let a = parseInt(prompt("Enter the value for 'a':"));
// let b = parseInt(prompt("Enter the value for 'b':"));
// let c = parseInt(prompt("Enter the value for 'c':"));
// let result = a + b + c;
// console.log(result);

// fourth method 
// let a = +prompt("Enter the value for 'a':");
// let b = +prompt("Enter the value for 'b':");
// let c = +prompt("Enter the value for 'c':");
// let result = a + b + c;
// console.log(result);


// if else condition 
let p = document.getElementById("demo");

let ForRollNumber = Number(prompt("Please enter your percentage number: "));

if (ForRollNumber >= 60 && p.innerHTML == "") {
    p.innerHTML = (ForRollNumber + " You are not eligible in Computer Science Department.");
} else if (ForRollNumber <= 30) {
    p.innerHTML = ("Sorry! You are not eligible to join this department.")
} else {
    p.innerHTML = (ForRollNumber + " You are not eligible in Biology Department.");
}