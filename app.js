// //                   chap 2
// //           VARIABLES FOR STRINGS 

// // Declare a variable called username.
// let username;

// // Declare a variable called myName & assign to it a string that represents your Full Name.  
// let myName = "Jhone Doe";

// // Write script to 
// // a) Declare a JS variable, titled message. 
// // b) Assign “Hello World” to variable message 
// // c) Display the message in alert box. 
// let message ="Hello World";
// alert(message);

// //Write a script to save student’s bio data in JS variables and the data in alert boxes. 
// alert("Jhone Doe");
// alert("15 year old");
// alert("Certified Mobile Application Development");

// // Write a script to display the following alert using one JS variable:
// let variable = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(variable);

// /*Declare a variable called email and assign to it a string that 
// represents your Email Address(e.g. example@example.com). 
// Show the blow mentioned message in an alert box.(Hint: use 
// string concatenation) */
// let email = "example@example.com";
// let alertMessage = "My email address is: " + email;
// alert(alertMessage);

// /* Declare a variable called book & give it the value “A 
// smarter way to learn JavaScript”. Display the following 
// message in an alert box: */
// let book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from a Book" +book);

// // Write a script to display this in browser through JS
// let content = "Yah! I can write HTML content through javascript";
// document.write(content,"<br>");

// //Store following string in a variable and show in alert and browser through JS 
// let symbol = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
// alert(symbol);
// document.write(symbol);

// CHAP 3
// VARIABLES FOR NUMBERS 

/* Declare a variable called age & assign to it your age. Show 
your age in an alert box. */
// let age = 15;
// alert("I am " + age + " years old");

/* Declare & initialize a variable to keep track of how many 
times a visitor has visited a web page. Show his/her 
number of visits on your web page. For example: “You 
have visited this site N times”*/
// let visit=prompt("how many times have you visit?");
// alert("you have visited " + visit+ " times");

// /* Declare a variable called birthYear & assign to it your 
// birth year. Show the following message in your browser: */
// let birthYear = 1990;
// document.write ("My birthyear is " + birthYear,"<br>");
// document.write("Data type of my declared variable is number","<br>");

// /* 4. A visitor visits an online clothing store 
// www.xyzClothing.com . Write a script to store in variables 
// the following information: 
// b. Product title 
// c. Quantity i.e. how many products a visitor wants to 
// order 
// Show the following message in your browser: “John 
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”. */
// let customerName = "John Doe";
// let onlineStore = "XYZ Clothing store"
// let product =" T-shirt(s)";
// let quantity = 5;
// document.write(customerName + " ordered " + quantity + "" +product + " on " + onlineStore, "<br>");

//CHAP 4 
// VARIABLE NAMES: LEGAL & ILLEGAL

//Declare 3 variables in one statement. 
// let a = 10, b = 20, c = 30;

// // Declare 5 legal & 5 illegal variable names. 
// let _$;
// let camelCase;
// let number;
// let total = _$ + camelCase + number;
// let  _9w;
// // illegal 
// let product cost = 3.45;
// let price23a% ;
// let 1st_name ="kelvin";
// let this is a variable = "john";
// let n*um = 15;

// . Display this in your browser 
// a)  A heading stating “Rules for naming JS variables” 
// b)  Variable names can only contain ______, ______, 
// ______ and ______. 
// For example $my_1stVariable 
// c) Variables must begin with a ______, ______ or 
// _____. For example $name, _name or name 
// d) Variable names are case _________ 
// e) Variable names should not be JS _________   

// document.write("<h1>Rules for Naming JavaScript Variables</h1>");
// let a = "dollar, underscore, digite and letter";
// let example = "For example $my_1stVariable"
// document.write(" a) Variable names can only contain " + a +"<br>" , example , "<br>");
// let b = "dollar, underscore, digit ";
// document.write("b) Variables must begin with a " + b , "<br>", "For example $name, _name or name", "<br>");
// let c = "Case Sensitive";
// document.write("c) Variable names are case" + c, "<br>");
// let d = "Reserved word"
// document.write("d) Variable names should not be JavaScript" + d );

//CHAP 5
// MATH EXPRESSIONS 

/* Write a program that take two numbers & add them in a 
new variable. Show the result in your browser. */
//  let x = 3;
//  let y = 5;
//  document.write("The sum of 3 + 5 is = " , x + y,"<br>");
//  // 2. Repeat task1 for subtraction, multiplication, division & modulus.
// document.write("The substraction of 3 - 5 = " , x - y ,"<br>");
// document.write("The multiplicstion of 3 * 5 = " , x * y ,"<br>");
// document.write("The divide of 3 / 5 = " , x / y ,"<br>");
// document.write("The modulus of 3 % 5 = " , x % y ,"<br>");

// Do the following using JS Mathematic Expressions 
// a. Declare a variable.
//  let num ;
//  // Display value after declaration
//  document.write("Value after variable declaration is: " + num + "<br>");
// // Initialize variable
// num = 5;
// document.write("Initial value: " + num + "<br>");
// // Increment variable
// num++;
// document.write("Value after increment is: " + num + "<br>");
// // Add 7 to variable
// num += 7;
// document.write("Value after addition is: " + num + "<br>");
// // Decrement variable
// num--;
// document.write("Value after decrement is: " + num + "<br>");
// // Display remainder after division by 3
// document.write("The remainder is: " + (num % 3));

// Cost of one movie ticket is 600 PKR. Write a script to 
// store 
// ticket price in a variable & calculate the cost of buying 5 
// tickets 
// to a movie. Example output:
// let cost = 600;
// let ticket = 5;
// document.write("Total cost to buy 5 tickets to a movie is ", cost*ticket, "RS");

// Write a script to display multiplication table of any number in your browser.
// let n = prompt("enter table number")
// let range = prompt("enter table range")
// for( let  i=1; i<=range; i++){
// document.write(n + "x" + i + '=' +n*i ,"<br>")
// }

// Celsius to Fahrenheit conversion
//  let celsius = 25;
//  let fahrenheit = (celsius * 9/5) + 32;
// document.write(celsius,"°C is" , fahrenheit,"°F", "<br>");

// // Fahrenheit to Celsius conversion
//  let fahrenheit2 = 70;
//  let celsius2 = (fahrenheit2 - 32) * 5/9;
//  document.write(fahrenheit2, "°F is", celsius2, "°C");

/* Write a program to implement checkout process of a 
shopping cart system for an e-commerce website. Store 
the following in variables 
a. Price of item 1 
b. Price of item 2 
c. Ordered quantity of item 1 
d. Ordered Quantity of item 2 
e. Shipping charges 

Compute the total cost & show the receipt in your browser*/
// let item1 = 650;
// let item2 = 100;
// let quantity1 = 3;
// let quantity2 = 7;
// let charges = item2;
// document.write("<h1>Shopping Cart</h1>");
// document.write("The price of item 1 is ", item1 , "<br>");
// document.write("quantity of item 1 is ", quantity1 , "<br>");
// document.write("The price of item 2 is ", item2 , "<br>");
// document.write("quantity of item 2 is ", quantity2 , "<br>");
// document.write("The shipping charges is ", charges , "<br>", "<br>");
// document.write("Total cost of your order is ", item1*quantity1+item2*quantity2+charges , "<br>");

// Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser 
// let totalMarks= 980;
// let marksObtained = 804;
// document.write("<h1>", "MARKSHEET" , "</h1>" , "<br>")
// document.write("Total Marks = ", totalMarks , "<br>", "Obtained Marks = ", marksObtained , "<br>", "Percentage = " , marksObtained/totalMarks)


/* Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
script to convert the total currency to Pakistani Rupees. 
Perform all calculations in a single expression. 
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
and 1 Saudi Riyal = 28 Pakistani Rupee) */

// let dollar = 104.80;
// let riyal = 28;
// let currency = 10*dollar + 25*riyal;
// document.write("<h1> CURRENCY IN PKR","</h1>")
// document.write("Total Currency in PKR is: " , currency , "<br>"); 


/*  Write a program to initialize a variable with some 
number and do arithmetic in following sequence: 
a. Add 5 
b. Multiply by 10 
c. Divide the result by 2 
Perform all calculations in a single expression */
// let num = 5;
// document.write(num+5,"<br>",num*10,"<br>",num/2,"<br>");


/* The Age Calculator: Forgot how old someone is? 
Calculate it! 
a. Store the current year in a variable. 
b. Store their birth year in a variable. 
c. Calculate their 2 possible ages based on the stored 
values. */
// let currentYear = 2024;
// let birthYear = 2004;
// let age = currentYear - birthYear;
// document.write("<h1>", "Age Calculation" , "</h1>");
// document.write("current year is ", currentYear, "<br>" , "Birth Year is " , birthYear, "<br>", "your Age is ", age , "<br>") ;


/* 12. The Geometrizer: Calculate properties of a circle. 
a. Store a radius into a variable.  
b. Calculate the circumference based on the radius, and 
output “The circumference is NN”. 
(Hint : Circumference of a circle = 2 π r , π = 3.142) 
Calculate the area based on the radius, and output “The 
area is NN”. (Hint : Area of a circle = π r2, π = 3.142) */
//  let r = 20;
//  let π = 3.142;
//  let c = 2*π*r;
//  document.write("<h1>","The Geometrizer","</h1>");
//  document.write("Radius of a circle is ", r, "<br>");
//  document.write("The circumference is ", π,"<br>");
//  document.write("The area of circle is ", π*r**2,"<br>" );


/*  The Lifetime Supply Calculator: Ever wonder how 
much a “lifetime supply” of your favorite snack is? 
Wonder no more. 
a. Store your favorite snack into a variable 
b. Store your current age into a variable. 
c. Store a maximum age into a variable. 
d. Store an estimated amount per day (as a number). 
e. Calculate how many would you eat total for the rest of 
your life. 
Output the result to the screen like so: “You will need 
NNNN to last you until the ripe old age of NN”. */
// let supply = " The Lifetime Supply Calculator "
// let favSnack = "Chocolate Chip";
// let age =15;
// let maxAge = 65;
// let amount = 3;
// document.write("<h1>", supply,"</h1>");
// document.write("Favourite snacks: " , favSnack, "<br>" , "current age " , age , "<br>" , "Estimate Maximum age " , maxAge , "<br>" , "The amount of snacks per day " , amount , "<br>", "You will need " , maxAge - age * 3 , "chocolate chips to last you until the ripe old age of 65");
// doucument.write("Curren age ", age , "<br>");
// document.write("Estimated Maximum Age ", maxAge , "<br>");
// document.write("The amount of snacks pert day ; " , amount , "<br>");
// document.write("You will need ", maxAge - age * 3 , "chocolate chips to last youuntil the ripe old age of ", maxAge); 

