// alert("Hello");

// var number1 = 4;
// var number2 = 6;

// alert(number1 + number2 * number2 / number1);
// BODMAS

// Bracket Open , Multification , Addition , Subtraction

let p = document.getElementById("demo");

var UserName = prompt("Enter Your Name");
var UserAge = prompt("Enter Your Current Age");
var UserDate = prompt("Enter Your BirthDate")
var UserMonth = prompt("Enter Your Birth Month");
var age_result = 2024 - UserAge;


if (p.innerHTML == "") {
    p.innerHTML = "Your Name is " + UserName + " and " + " Your Birth Year is " + UserDate + "-" + UserMonth + "-" + age_result;
}
else {
    pass();
}
