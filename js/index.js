const currentNumber = document.querySelector('.current-number');
const expression = document.querySelector('.expression');
const hiddenCurrent = document.querySelector('.hidden-current');

let firstNumber = '';
let secondNumber = '';
let calcOperator = '';
let result = 0;

/**
 * @author 웹팀 김예원 2024-04-22
 * @type {boolean} 계산이 끝났는지 구분하는 변수
 * @example =을 눌러서 계산이 끝나면 true
 */
let endCalc = false;

/**
 * @author 웹팀 김예원 2024-04-22
 * @type {Object} clearCalculator 함수에서 어떤 버튼을 눌렀는지에 따라 기능 구분
 */
const clearType = {
    END: 'END',
    CLEAR: 'CLEAR'
}

