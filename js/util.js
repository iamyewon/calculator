
const removeComma = (value) => {
    return value.replace(/,/g, '');
}

const addComma = (value) => {
    const splitValue = value.toString().split('.');
    const decimalLimit = 16-splitValue[0].length;
    const numLimit = splitValue[1] ? splitValue[1].length : 0;
    const option =  { maximumFractionDigits: decimalLimit, minimumFractionDigits:numLimit}

    return result.toString().replace('.', '').length > 16 ?  Number(value).toLocaleString('ko-KR') : Number(value).toLocaleString('ko-KR', option);
}

const calc = () => {
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);

    switch(calcOperator) {
      case '+':
        return Number(num1 + num2);
      case '-':
        return Number(num1 - num2);
      case '÷':
        return Number(num1 / num2);
      case 'x':
        return Number(num1 * num2);
    } 
}

// 두 숫자(first, second) 모두 있을 때 
const calculateTwoNumbers = () => {
    expression.value = `${expression.value} ${Number(secondNumber)} =`;
    result = calc();
    handleDecimalLimit();
    currentNumber.value = addComma(currentNumber.value);
    hiddenCurrent.textContent = currentNumber.value;
}


// 소수점 자리 한계 ex) 1234.xxx -> xxx는 16-4(정수 부분)
const handleDecimalLimit = () => {
    const splitResult = result.toString().split('.');
    const decimalLimit = 16-splitResult[0].length;

    if (result.toString().includes('.') && splitResult[1].length >= decimalLimit ){
        currentNumber.value = Number(result.toFixed(decimalLimit));
        hiddenCurrent.textContent = currentNumber.value;
    }else{
        hiddenCurrent.textContent = result;
        // handleResultFontSize();
        currentNumber.value = result;
    }
}

// click clear btn + endCalc
const clearCalculator = (func) => {
    if(func === clearType.CLEAR){
        firstNumber = '';
        expression.value = '';
        currentNumber.value = 0;
        resetFont();
    }else if(func === clearType.END){
        firstNumber = result;
        // handleResultFontSize();
        endCalc = true; 
    }
    secondNumber = '';
    calcOperator = '';
    result = 0;
    hiddenCurrent.textContent = currentNumber.value;
}


// TODO 
const inputValues = (firstNumberValue, secondNumberValue, expressionValue, currentNumberValue, calcOperatorValue) => {
    firstNumber = firstNumberValue;
    secondNumber = secondNumberValue;
    expression.value = expressionValue;
    currentNumber.value = currentNumberValue;
    hiddenCurrent.textContent = currentNumberValue;
    calcOperator = calcOperatorValue;
}

