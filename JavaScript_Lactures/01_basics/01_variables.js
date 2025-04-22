// JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well. JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming.

// variables 
// A variable is a named reference to a value. Thats'way an unpredictable value can be accessed through a predetermined name.

const accountID = 9847387
let accountEmail = "hitesh@google.com"
var accountPassword = 12345
let accountCity = "Jaipur"
let accountState;

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])

// ** accountID  = 2  this is not allow cause accountID is const variable

// ** prefer to not use var because of issue in block scope and functional scope 

// now change the value of these variables. 
 
accountEmail = "Rahamat@123"
accountPassword = 2
accountCity = "Delhi"

// console.table([accountEmail, accountPassword, accountCity]);


// Test var issue example 

// function testVarIssue() {
//     var value = 10;

//     if (true) {
//         var value = 20 
//         console.log(`Inside block scope =  ${value}`);
//     }

//     console.log(`Out side block scope = ${value}`);
    
// }

// testVarIssue()




