//JS Tasks/chapters31-Javascript    MATH METHODS | JAVASCRIPT


// Q1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var num = +prompt("Enter a Number Here");
// document.write("Number :"+ num);
// document.write("<br>");
// var Roff  = Math.round(num);
// document.write("round off value :"+Roff);
// document.write("<br>");
// var fval = Math.floor(num);
// document.write("floor value :"+ fval);
// document.write("<br>");
// var cval = Math.ceil(num);
// document.write("ceil value:"+ cval);

// Q2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var num = +prompt("Enter a Number Here");
// document.write("Number :"+ num);
// document.write("<br>");
// var Roff  = Math.round(num);
// document.write("round off value :"+Roff);
// document.write("<br>");
// var fval = Math.floor(num);
// document.write("floor value :"+ fval);
// document.write("<br>");
// var cval = Math.ceil(num);
// document.write("ceil value:"+ cval);



//Q3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var num1 =+prompt("Enter Any Type of Number ");
// var num2  = Math.abs(num1);
// document.write("The absolute value of "+ num1 +" is "+num2);

// Q4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// var x =Math.floor(Math.random()*5)+1;
// document.write("Random Dice value :"+x);
// document.write("<br>");
// var y =Math.floor(Math.random()*7)+1;
// document.write("Random Dice value :"+y);
// document.write("<br>");

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var coin =Math.floor(Math.random()*2)+1;
// if(coin>1){
// document.write(coin +"<br>" +"random coin value :Heads")}
// else if(coin=1){
// document.write(coin +"<br>" +"random coin value :Tails")}

// Q6. Write a program that shows a random number between 1
// and 100 in your browser.

// var R =Math.floor(Math.random()*101);
// document.write("random number between 1 and 100 : " + R);

//Q7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// function parseWeight() {
//     var userInput = prompt("Please enter your weight:");

//     var regex = /^(\d+(\.\d+)?)(kgs?|kilograms?)?$/i;

//     var match = userInput.match(regex);

//     if (match) {
//         var weight = parseFloat(match[1]);
//         var unit = match[3] || "kgs";
//         alert("Your weight is: " + weight.toFixed(2) + " " + unit);
//     }
//      else {
//         alert("Invalid input. Please enter a valid weight.");
//     }
// }


//Q8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 10) + 1;
// var numberOfStars = Math.floor(improvedNum);
// let text4 = prompt("enter a number between 1 to 10")

// console.log(numberOfStars)
// if( numberOfStars == text4 ){
//       console.log("congragulation your answer is correct")}
// else if (numberOfStars != text4) 
//       console.log("try again your answer is wrong")

// Assignment # 31-34      DATE METHODS | JAVASCRIPT


// Q1. Write a program that displays current date and time in
// your browser.

// var currentDay =new Date();
// document.write(currentDay)

// Q2. Write a program that alerts the current month in words.
// For example December.


// var month= [
// "January",
// "Feburary",
// "March",
// "April",
// "May",
// "June",
// "July",
// "August",
// "September",
// "October",
// "November",
// "December",
// ]
// var M = new Date();
// var currentMonth = M.getMonth();
// let monthname = month[currentMonth]
// console.log("current month is:"+monthname)

// Q3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.


// var day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// var D = new Date();
// var currentDay = D.getDay();
// let monthname = day[currentDay]
// console.log("Today is:"+D )

// Q4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

//var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//var date = new Date(); 
//var currentday = date.getDay();
//var day = Days[currentday];
//var funDay = Days[0,6];
//if (day == funDay){
//alert("Today is "+ day +"\n"+ " Its Fun Day")
// }
// else {
// alert("Today is "+ day + "\n" + " Its working day")
// }


//OR
// var day =["sun","mon","tue","wed","fri","sat"]
// var d = new Date();
// var currentday = d.getDate();
// let datename = day[currentday]

//  console.log("Current day is : "+datename)
//  if (currentday != [1],[2],[3],[4])
//  console.log("Its a working day")
// else if(currentday =[0],[5])
// console.log("Its a fun day")

//Q5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

//??



// Q6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.


// var todayDate = new Date();
//  var Todaymilli = todayDate.getTime();
//  var todayMin = todayDate.getMinutes();
//  var diff = Todaymilli - todayMin;
//  var diffMin = diff/(1000*60*60);
//  var accurateMin = Math.floor(diffMin);
 
  
//  document.write("Current Date: " + todayDate);
//  document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
//  document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)



// Q7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var d = new Date();
// var Hrs = d.getHours();

// console.log(Hrs)
// if (Hrs >= 0 && Hrs <=12)
//console.log(" Its AM ");
//else if (Hrs > 12 && Hrs <= 24)
//console.log(" Its PM ")

// Q8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.


// var d = new Date ("Thu,Dec 31,2020 00:00:00")
// document.write("Later Date :"+d)


// Q9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015


// var ramadanStartDate = new Date(2015, 5, 18); 
// var currentDate = new Date();
// var timeDifference = currentDate - ramadanStartDate;
// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// alert("Number of days passed since 1st Ramadan (June 18, 2015): " + daysPassed + " days")

// Q10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// var referenceDate = new Date('2000-01-01');
// var startDate = new Date('2015-01-01');
// var timeDifference = startDate - referenceDate;
// var secondsElapsed = Math.floor(timeDifference / 1000);
// document.write("Seconds elapsed between the reference date and the beginning of 2015: " + secondsElapsed + " seconds");

//Q11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.



// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);
// document.write("Current Date and Time: " + currentDate)

// Q12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// var formattedDate = (currentDate.getMonth() + 1) + '/' + currentDate.getDate() + '/' + currentDate.getFullYear();
// alert("100 years ago, the date was: " + formattedDate);


// Q13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser

// var d = new Date().getFullYear();
// let text6 =  prompt("enter your birth yeaar")
// console.log("your birth year is: "+text6)
// console.log( "your age is : "+  Math.abs(text6 - d))



// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// document.write("K.Electric bill <br>")
// document.write("Coustumer name : Mr Hello <br>")
// var month =["janurary","feburary","march","april","may","june","july","august","september","october","november","december"]
// var d = new Date();
// var currentMonth = d.getMonth();
// let monthname = month[currentMonth]

//  document.write("Month Bill  : "+monthname+"<br>")
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 1000) + 1;
// var numberOfStars = Math.floor(improvedNum);

// document.write("Used Units : "+numberOfStars+"<br>")

// var price = 16
// document.write("Per Unit price : "+ price + "<br>")

// document.write("Net Amount Payable Bill(with in due date) : "+ price*numberOfStars +"<br>")

// var late = 350
// document.write("Late Amont Charge : "+ late + "<br>")

// document.write("Net Amount Payable Bill(with Late Charges) : "+ ((price*numberOfStars)+late) +"<br>"





