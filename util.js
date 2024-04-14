
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
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '÷':
      return num1 / num2;
    case 'x':
        return num1 * num2;
  } 
}
