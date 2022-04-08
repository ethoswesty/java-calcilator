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

function buttonClick(){
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            if(buttons[i].classList.contains("operand")){
                inputOperand(buttons[i].value)
                updateDisplay();
            } else if (buttons[i].classList.contains("operator")){
                inputOperator(buttons[i].value)
                updateDisplay();
            } else if (buttons[i].classList.contains("equals")){
                inputEquals();
                updateDisplay();
            } else if (buttons[i].classList.contains("decimal")){
                inputDecimal(displayValue);
                updateDisplay();
            } else if (buttons[i].classList.contains("clear")){
                displayClear();
                updateDisplay();
            }
        })
    }
}

buttonClick();
 
updateDisplay();

function inputOperand(operand){
    if(firstOperator === null){
        if(firstOperator === "0" || displayValue === 0){
        displayValue = operand;
    } else if(displayValue === operand){
        displayValue = operand
    } else {
        displayValue += operand;
    }
    } else {
        if(displayValue === firstOperand){
            displayValue = operand
        } else {
            displayValue += operand;
        }
    }
}

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