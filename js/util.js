/**
 * CurrentNumber에 값을 넣는 함수
 * @param {} currentNumberValue 
 * @author 웹팀 김예원 2024-04-22
 * @description hiddenCurrent는 currentNumber와 동일함
 */
const inputCurrentNumber = (currentNumberValue) => {
    currentNumber.value = currentNumberValue;
    hiddenCurrent.textContent = currentNumberValue;
}
const inputExpreesion = (expressionValue) => {
    expression.value = expressionValue;
}
const inputFirstNumber = (firstNumberValue) => {
    firstNumber = firstNumberValue;
}
const inputSecondNumber = (secondNumberValue) => {
    secondNumber = secondNumberValue;
}
const inputCalcOperator = (calcOperatorValue) => {
    calcOperator = calcOperatorValue;
}
const inputResult = (resultValue) => {
    result = resultValue;
}
// 아래도 동일하게 적어야할지? 


/**
 * 화면에 보이는 값들에 값을 넣어주는 함수
 * @author 웹팀 김예원 2024-04-22
 * @param {string} expressionValue expression에 넣을 값
 * @param {string} currentNumberValue currentNumber에 넣을 값
 */
const inputScreenValues = (expressionValue, currentNumberValue) => {
    if(expressionValue !== null) inputExpreesion(expressionValue); 
    if(currentNumberValue !== null) inputCurrentNumber(currentNumberValue);
}    


/**
 * 계산에 필요한 값들에 값을 넣어주는 함수
 * @author 웹팀 김예원 2024-04-22
 * @param {string} firstNumberValue firstNumber에 넣을 값
 * @param {string} secondNumberValue secondNumber에 넣을 값
 * @param {string} calcOperatorValue calcOperator에 넣을 값
 */
const inputCalcValues = (firstNumberValue, secondNumberValue, calcOperatorValue) => {
    if(firstNumberValue !== null) inputFirstNumber(firstNumberValue);
    if(secondNumberValue !== null) inputSecondNumber(secondNumberValue);
    if(calcOperatorValue !== null) inputCalcOperator(calcOperatorValue);
}


/**
 * 값에 ,를 지우는 함수
 * @author 웹팀 김예원 2024-04-22
 * @param {string} value ,를 지울 값
 * @returns {string} value에서 ,를 제외한 문자열을 리턴 
 */
const removeComma = (value) => {
    return value.replace(/,/g, '');
}

/**
 * 값에 ,를 추가하는 함수
 * @author 웹팀 김예원 2024-04-22
 * @param {string} value ,를 추가해줄 값
 * @returns {string} value에서 ,를 추가해준 문자열을 리턴
 * @type {Array<string>} splitValue : value를 . 기준으로 자름 
 * @type {number} decimalLimit : 소수점의 최대 길이, splitValue의 0번째 인덱스값을 16 (최대 숫자 길이) 에서 뺌
 * @type {number} numLimit : splitValue의 1번째 인덱스값이 있으면 그 길이를, 없으면 0으로
 * @type {string} option : 소수점 최대 길이, 최소 길이 설정 
 * 
 */
const addComma = (value) => {
    const splitValue = value.toString().split('.');
    console.log(typeof splitValue[0]);
    const decimalLimit = 16-splitValue[0].length;
    const numLimit = splitValue[1] ? splitValue[1].length : 0;
    const option =  { maximumFractionDigits: decimalLimit, minimumFractionDigits:numLimit}

    return result.toString().replace('.', '').length > 16 ?  Number(value).toLocaleString('ko-KR') : Number(value).toLocaleString('ko-KR', option);
}


/**
 * 계산하는 함수
 * @author 웹팀 김예원 2024-04-22
 * @returns {number} calcOperator의 값에 따라 계산한 값 
 * @type {number} firstNum : 첫번째 값을 임시로 변수에 담음
 * @type {number} secondNum : 두번째 값을 임시로 변수에 담음
 */
const calc = () => {
    let firstNum = Number(firstNumber);
    let secondNum = Number(secondNumber);

    switch(calcOperator) {
      case '+':
        return Number(firstNum + secondNum);
      case '-':
        return Number(firstNum - secondNum);
      case '÷':
        return Number(firstNum / secondNum);
      case 'x':
        return Number(firstNum * secondNum);
    } 
}

// 소수점 자리 한계 

/**
 * 소수점의 자릿수 한계
 * @author 웹팀 김예원 2024-04-22
 * @type {Object} splitResult : 결과값을 .기준으로 나눔
 * @type {number} decimalLimit : 16(최대 숫자 길이)에서 splitResult의 0번째 인덱스 값의 길이를 뺌
 * @description .을 포함하고, 소수점 길이가 소수점 최대 길이보다 길면 한계점에서 반올림 
 * @example 1234.xxxxxx -> xxxxxx의 길이 한계는 16-4 = 12자리 
 */
const handleDecimalLimit = () => {
    const splitResult = result.toString().split('.');
    const decimalLimit = 16-splitResult[0].length;

    if (result.toString().includes('.') && splitResult[1].length >= decimalLimit ){
        inputCurrentNumber(addComma(Number(result.toFixed(decimalLimit))));
    }else{
        inputCurrentNumber(addComma(result));
    }
}


/**
 * = 눌렀을 때, 두 숫자(first, second) 모두 있으면 호출되는 함수
 * @author 웹팀 김예원 2024-04-22
 */
const calculateTwoNumbers = () => {
    inputExpreesion(`${expression.value} ${Number(secondNumber)} =`);
    inputResult(calc());
    handleDecimalLimit();
}


/**
 * 진행중이던 계산식을 초기화하는 함수
 * @author 웹팀 김예원 2024-04-22
 * @param {string} func clear 버튼, = 버튼 구분
 * @description = 버튼을 눌렀을 때는 firstNumber에 result값이 들어감
 */
const clearCalculator = (func) => {
    if(func === clearType.CLEAR){
        inputScreenValues('', '0');
        inputFirstNumber('');
        resetFont();
    }else if(func === clearType.END){
        inputFirstNumber(result);
        endCalc = true; 
    }
    inputCalcValues(null, '', '');
    inputResult(0);
}

