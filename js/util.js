
const removeComma = (value) => {
    return value.replace(/,/g, '');
}

const addComma = (value) => {
    const splitValue = value.toString().split('.');
    const decimalLimit = 16-splitValue[0].length;

    const numLimit = splitValue[1]?.length;
    const option =  { maximumFractionDigits: decimalLimit, minimumFractionDigits:numLimit}
    // if (splitValue[1]){
    //     option = {...option, minimumFractionDigits :splitValue[1].length}
    // }
    // const option = {
    //     maximumFractionDigits: decimalLimit,
    //     minimumFractionDigits: splitValue[1] ? splitValue[1].length : numLimit
    // };

    return Number(value).toLocaleString(undefined, option);
    // util.js:15 Uncaught RangeError: maximumFractionDigits value is out of range.
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
        handleResultFontSize();
        currentNumber.value = result;
    }
}

// click clear btn + endCalc
const clearCalculator = (func) => {
    if(func === 'clear'){
        firstNumber = '';
        expression.value = '';
        currentNumber.value = 0;
        resetFont();
    }else if(func === 'endCalc'){
        endCalc = true
        firstNumber = result;
        handleResultFontSize();
    }
    secondNumber = '';
    calcOperator = '';
    result = 0;
    hiddenCurrent.textContent = currentNumber.value;
}


// 오버로딩? 인자 다를 때마다 ?
// value들 값 넣어주는 함수 
// 호출부에서 객체로 던져서 타입같은걸로 지정해서 있는 키로판단해서 값을 넣어주는? 


// 없는 값은 null로 처리해서  ? 그럼 null이 들어가버리면? 
const inputValues = (firstNumberValue, secondNumberValue, expressionValue, currentNumberValue, calcOperatorValue) => {
    firstNumber = firstNumberValue;
    secondNumber = secondNumberValue;
    expression.value = expressionValue;
    currentNumber.value = currentNumberValue;
    hiddenCurrent.textContent = currentNumberValue;
    calcOperator = calcOperatorValue;
}
