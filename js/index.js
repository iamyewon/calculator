const currentNumber = document.querySelector('.current-number');
const expression = document.querySelector('.expression');
const hiddenCurrent = document.querySelector('.hidden-current');

let firstNumber = '';
let secondNumber = '';
let calcOperator = '';
let result = 0;
let endCalc = false;

const clearType = {
    END: 'END',
    CLEAR: 'CLEAR'
}