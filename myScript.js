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
    if(displayValue.length > 9) {
        display.innerText = displayValue.substring(0, 11);
    }
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
        inputOperator(target.value);
        updateDisplay();
    }

    if (target.classList.contains('decimal')){
        inputDecimal(target.value);
        updateDisplay();
    }

    if (target.classList.contains('clear')){
        displayClear();
        updateDisplay();
    }

    if (target.classList.contains('equals')){
        inputEquals();
        updateDisplay();
    }


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

function inputOperator(operator){
        if (firstOperator !== null && secondOperator === null){
            secondOperator = operator;
            secondOperand = displayValue;
            result = operate(Number(firstOperand), Number(secondOperand), firstOperator)
            displayValue = roundNumber(result, 15).toString();
            firstOperand = displayValue
            result = null
        } else if (firstOperator != null && secondOperator != null){
            secondOperand = displayValue;
            result = operate(Number(firstOperand), Number(secondOperand), firstOperator)
            secondOperator = operator
            displayValue = roundNumber(result, 15).toString();
            firstOperand = displayValue
            result = null
        } else {
            firstOperator = operator
            firstOperand = displayValue
        }
}

function inputEquals() {
    if(firstOperator === null){
        displayValue = displayValue;
    } else if(secondOperator != null) {
        secondOperand = displayValue
        result = operate(Number(firstOperand), Number(secondOperand), secondOperator)
        if(result === "nice try..."){
            displayValue = "nice try..."
        } else {
            displayValue = roundNumber(result, 15).toString();
            firstOperand = displayValue
            secondOperand = null
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    } else {
        secondOperand = displayValue
        result = operate(Number(firstOperand), Number(secondOperand), firstOperator)
        if(result === "nice try..."){
            displayValue = "nice try..."
    } else {
        displayValue = roundNumber(result, 15).toString();
        firstOperand = displayValue
        secondOperand = null
        firstOperator = null;
        secondOperator = null;
        result = null;
        } 
    }
}


function inputDecimal(point){
    if(displayValue === firstOperand || displayValue === secondOperand){
        displayValue = "0"
        displayValue += point
    } else if (!displayValue.includes(point)){
        displayValue += point;
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

function roundNumber(num, places){
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}
