// Question 1
var city = prompt("Enter your City Name");
document.write("Welcome to"+" "+city, "<br>");

// Question 2
var gender = prompt("Enter Your Gender");
if (gender === "male" || gender === "Male") {
    document.write("Good Morning Sir <br>");
}else if(gender === "female" || gender === "Female") {
    document.write("Good Morning Ma'am <br>");
}else{
    document.write("Incorrect Input <br>");
}

// Question 3
var traffic = prompt("Enter Your Red, Yellow or Green");
if (traffic === "red" || traffic ===  "Red") {
    document.write("Must Stop <br>");
    
}else if(traffic === "Yellow" || traffic ===  "yellow") {
    document.write("Ready to Move <br>");
    
}else if(traffic === "Green" || traffic ===  "green"){
    document.write("Move Now <br>");
    
}else{
    document.write("Incorrect Input <br>");
}

// Question 4
var fuel = Number(prompt("Enter your fuel in car (in liters)"));
if (fuel > 0.25) {
    document.write("Fuel is Enough");
} else {
    document.write("Please refill the fuel in your car");
}

// Question 5
var a = 4;
if(++a === 5){
    console.log("A is True");
}else{
    console.log("False");
}


var b = 34;

if (b++ === 35) {
    console.log("B is True");
}else if(b === 35){
    console.log("'Condition 2' B is True");
}else{
    console.log("False");
}


var c = 12;

if (c++ === 13){
console.log("condition 1 is true");
}else if (c === 13){
console.log("condition 2 is true");
}else if (++c < 14){
console.log("condition 3 is true");
}else{
console.log("False");
}


var materialCost = 20000;
var labourCost = 5000;
var totalCost = materialCost + labourCost;
if (totalCost === materialCost+labourCost) {
    console.log("True");
} else {
    console.log("False");    
}


if(true){
    console.log("True");
} 
if(false){
    console.log("False");
} 


if("car" < "cat"){
    console.log("Car is samller than Cat");
}

// Question 6
document.write("<h1>Mark Sheet</h1>");
var marks = 300;
var obtainmarks = prompt("Enter your Obtained Marks in 300");
var percentage = (obtainmarks/marks)*100;
var remarks;
document.write("Marks" + marks + "<br>");
document.write("Obtained-Marks:" + obtainmarks + "<br>");
document.write("Percentage:" + percentage + "%<br>");

// Question 7
var guess = +prompt("Enter number 1 - 10");
if (guess === 7) {
    document.write("Correct Answer");
}else if(guess === 6){
    document.write("Close enough to the correct answer!");
}else{
    document.write("Try again");
}

// Question 8
var number = prompt("Enter a number");

if (number % 3 === 0) {
    document.write("Yes! The number " + number + " is divisible by 3.");
} else {
    document.write("No! The number " + number + " is not divisible by 3.");
}

// Question 9
var evenodd = prompt("Enter a number");

if (evenodd % 2 === 0) {
    document.write("The "+ evenodd +" is Even");
} else {
    document.write("The "+ evenodd +" is Odd");
}

// Question 10
var temp = prompt("Enter Temperature");
if(temp >= 40){
    document.write("It is too hot outside");
}else if(temp >= 30){
    document.write("The wheather today is normal");
}else if(temp >= 20){
    document.write("Today's wheather is cool");
}else if(temp >= 10){
    document.write("OMG! Today wheather is so cool");
}

// Question 11
var num1 = +prompt("Enter a number");
var num2 = +prompt("Enter a number");
document.write("Addition "+ (num1+num2) +"<br>");
document.write("Subtraction "+ (num1-num2) +"<br>");
document.write("Multiply "+ (num1*num2) +"<br>");
document.write("Divide "+ (num1/num2) +"<br>");
document.write("Remainder "+ (num1%num2) +"<br>");


// Chapter 13

// Question 3
var numb = Number(prompt());
if (numb > 0) {
    document.write("✅Number is Positive");
} else if (numb < 0){
    document.write("❌Number is Negative");
}else{
    document.write("⭕Number is 0");
}

// Question 4
var char = (prompt("Enter any character in lower case"));
if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    document.write("✅ Correct");
} else {
    document.write("❎ Wrong");
}

// Question 5
var pass = 12345;
if (pass === 12345) {
    alert("Correct ✅");
} else {
    
}
