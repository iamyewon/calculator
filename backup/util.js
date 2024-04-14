
const removeComma = (value) => {
    return value.replace(/,/g, '');
}


const addComma = (value) => {
    const splitValue = value.toString().split('.');
    const decimalLimit = 16-splitValue[0].length;

    const option =  { maximumFractionDigits: decimalLimit }
    return Number(value).toLocaleString(undefined, option);
}


const calc = () => {
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);

  switch(calcOperator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '÷':
      return num1 / num2;
    case 'x':
        return num1 * num2;
  } 
}
