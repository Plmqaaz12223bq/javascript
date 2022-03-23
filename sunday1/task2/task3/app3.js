let operation = prompt("Enter an operation sign (+, -, *, /): ");
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");

let number1 = Number(num1);
let number2 = Number(num2);

switch (operation) {
    case "+": let Addition = number1 + number2 ;
            console.log(Addition)
            break;
    case "-": let Subtraction = number1 - number2 ;
            console.log(Subtraction)
            break;
    case "*": let Multiblication = number1 * number2 ;
            console.log(Multiblication)
            break;
    case "/": let Division = number1 / number2 ;
            console.log(Division)
            break;
}