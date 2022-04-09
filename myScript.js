const buttons = document.querySelector(".calculator_keys");
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


buttons.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')){
    return;
    }

    if (target.classList.contains('operand')){
        inputOperand(target.value);
        updateDisplay();
    }

    if (target.classList.contains('operator')){
        console.log('operator', target.value);
    }

    if (target.classList.contains('decimal')){
        console.log('decimal', target.value);
    }

    if (target.classList.contains('clear')){
        console.log('clear', target.value);
    }

    // inputOperator(target.value);
    // updateDisplay();

});

function inputOperand(operand){
    if (firstOperator == null){
        if(displayValue === "0" || displayValue === 0){
            displayValue = operand
        } else if (displayValue === firstOperand){
            displayValue = operand
        } else {
            displayValue += operand
        }
    } else {
        if(displayValue === firstOperand){
            displayValue = operand
        } else {
            displayValue += operand
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