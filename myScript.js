let buttons = document.querySelectorAll("button");
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
let displayValue = "0";

function updateDisplay(){
    const display = document.getElementById("display");
    display.innerHTML = displayValue;
}

updateDisplay();


function operate(x, y, op){
    if(op === "+"){
        return x + y;
    } else if(op === "-"){
        return x - y;
    } else if (op === "*"){
        return x * y;
    } else if(op === "/"){
        if(y === 0){
            return "nice try..."
        } else{
            return x / y;
        }
    }
}

function displayClear(){
firstOperand = null;
secondOperand = null;
firstOperator = null;
secondOperator = null;
result = null;
displayValue = "0";
}