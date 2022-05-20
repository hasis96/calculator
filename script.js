let disableOpBtns = false;
let disableDecimalBtn = false;
let equation = [];
let operator = '';
let screenEquation = '';
let answer = '';

const operatorButtons = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('.number');
const decimalButton = document.querySelectorAll('.decimal')
const screen = document.querySelector('.screen');
const clearButton = document.getElementById('clearBtn');
const equalsButton = document.getElementById('equals');
const deleteButton = document.getElementById('deleteBtn')

deleteButton.addEventListener('click', () => {
    
});

equalsButton.addEventListener('click', () => {
    equationString = equation.join("");
    processedEquationString = equationString.split(/(\d+)/).filter(Boolean);
    roundAnswer(
        operate(processedEquationString));
    disableOpBtns = false;
    clear();
    screenEquation = answer;
    equation[0] = answer;
    changeDisplay();
});

clearButton.addEventListener('click', clear);

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        equation.push(button.id);
        screenEquation += button.textContent;
        changeDisplay();
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (disableOpBtns === false) {
            equation.push(button.id);
            screenEquation += button.textContent;
            operator = button.id;
            disableOpBtns = true;
        } else if (disableOpBtns === true) {
            return
        }
        changeDisplay();
    });
});

decimalButton.forEach((button) => {
    button.addEventListener('click', () => {
        if (disableDecimalBtn === false) {
            equation.push(button.id);
            screenEquation += button.textContent;
            disableDecimalBtn = true;
        } else if (disableDecimalBtn === true) {
            return
        }
        changeDisplay();
    });
});

function changeDisplay() {
    screen.textContent = screenEquation;
}

function roundAnswer(number) {
    return (number * 1000) / 1000;
}

function clear() {
    disableOpBtns = false;
    disableDecimalBtn = false;
    equation = [];
    operator = '';
    screenEquation = '';
    changeDisplay();
}


const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

function operate(array) {
    num1 = parseFloat(array[0]);
    num2 = parseFloat(array[2]);
    operator = array[1];
    
    switch(operator) {
        case 'add':
            answer = add(num1, num2);
            break;
        case 'subtract':
            answer = subtract(num1, num2);
            break;
        case 'multiply':
            answer = multiply(num1, num2);
            break;
        case 'divide':
            if (num2 === 0) {
                answer = 'ERROR'
            } else {
                answer = divide(num1, num2);
            }
            break;
    }
}