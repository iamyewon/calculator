
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
    return Number(value).toLocaleString(undefined, option);
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

const handleResultFontSize = () => {
  if(hiddenCurrent.clientWidth >= 315){
    while(hiddenCurrent.clientWidth >= 315){
      const currentFontSize = parseFloat(window.getComputedStyle(currentNumber).fontSize);
      const hiddenCurrentFontSize = parseFloat(window.getComputedStyle(hiddenCurrent).fontSize);
      currentNumber.style.fontSize = (currentFontSize * 0.94) + 'px'; 
      hiddenCurrent.style.fontSize = (hiddenCurrentFontSize * 0.94) + 'px';
    }
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

// = 을 눌렀을 때
const handleEndCalc = () => {
  firstNumber = result;
  secondNumber = '';
  calcOperator = '';
  hiddenCurrent.textContent = currentNumber.value;
  result = 0;
  handleResultFontSize();
  endCalc = true;
}


// TODO : handleClearBtn 와 동일기능 