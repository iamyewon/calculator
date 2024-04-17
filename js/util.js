
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

const calculateTwoNumbers = () => {
  expression.value = `${expression.value} ${Number(secondNumber)} =`;
  result = calc();
  handleDecimalLimit();
  currentNumber.value = addComma(currentNumber.value);
  hiddenCurrent.textContent = currentNumber.value;
}

const handleDecimalLimit = () => {
  const splitResult = result.toString().split('.');
  const decimalLimit = 16-splitResult[0].length;

  if (result.toString().includes('.') && splitResult[1].length >= decimalLimit ){
      currentNumber.value = Number(result.toFixed(decimalLimit));
      hiddenCurrent.textContent = currentNumber.value;
  }else{
      currentNumber.value = result;
      hiddenCurrent.textContent = currentNumber.value;
  }
}

const handleEndCalc = () => {
  firstNumber = result;
  secondNumber = '';
  calcOperator = '';
  hiddenCurrent.textContent = currentNumber.value;
  result = 0;

  handleCurrentNumberFont();
  endCalc = true;
}

