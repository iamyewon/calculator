const currentNumber = document.querySelector('.current-number');
const expression = document.querySelector('.expression');

let firstNumber = '';
let secondNumber = '';
let calcOperator = '';
let result = 0;
let endCalc = false;

const handleInput = (event) => {
    console.log(window.getComputedStyle(currentNumber).width); 
}


const handlePointBtn = (e) => {

    if(endCalc){
        expression.value = '';
        currentNumber.value = '0';
        firstNumber = '';
        endCalc = false;
    }

    if (currentNumber.value.includes('.')) {
        return;
    } else {
        currentNumber.value += '.';
    }
};


const handleClearBtn = () => {
    currentNumber.value = 0;
    expression.value = '';
    firstNumber = '';
    secondNumber = '';
    calcOperator = '';
    result = 0;
  };


const handleDeleteBtn = () => {
    currentNumber.value = removeComma(currentNumber.value);
    currentNumber.value = addComma(currentNumber.value.slice(0, -1));
};


const handlePercentBtn = () => {
    currentNumber.value = removeComma(currentNumber.value);
    currentNumber.value = Math.round((currentNumber.value / 100) * 1e10) / 1e10;
    currentNumber.value = addComma(currentNumber.value);

    if(calcOperator === ''){
        firstNumber = currentNumber.value;
    }else{
        secondNumber = currentNumber.value;
    }
};


const handleInputNumber = (e) => {
    const btnValue = e.target.textContent.trim();    
    
    if(endCalc){
        expression.value = '';
        currentNumber.value = '';
        firstNumber = '';
        endCalc = false;
    }

    if(16-currentNumber.value.replace(/\D/g, '').length <= 0){
        return;
    }

    currentNumber.value = removeComma(currentNumber.value);

    if (Number(currentNumber.value) === 0 && !currentNumber.value.includes('0.')) {
        currentNumber.value = '';
    }

    currentNumber.value += btnValue;

    if(calcOperator === ''){
        firstNumber = currentNumber.value;
    }else{
        secondNumber = currentNumber.value;
    }

    currentNumber.value = addComma(currentNumber.value);
    currentNumber.dispatchEvent(new Event('input'));
};

const handleOperatorBtn = (e) => {
    if(endCalc){
        expression.value = '';
        endCalc = false;
    }
    const btnValue = e.target.textContent.trim();
    expression.value += ` ${Number(removeComma(currentNumber.value))} ${btnValue}`;
    currentNumber.value = 0; 

    if(firstNumber === ''){
        firstNumber = '0';
    }

    if(calcOperator === ''){ 
        calcOperator = btnValue;
        if(secondNumber !== ''){
            secondNumber = '';
        }
    }else{
        result = calc();
        firstNumber = result;
        secondNumber = '';
        calcOperator = btnValue;
    }
};


const handleEqualsSign = () => {
    // depth 정리 
    if(!endCalc){
        if(secondNumber === ''){
            if(calcOperator !== ''){
                secondNumber = firstNumber;
                result = calc();
                expression.value += ` ${Number(secondNumber)} =`;
                currentNumber.value = addComma(result);
            }else{
                expression.value = `${Number(firstNumber)} =`
                result = Number(firstNumber);
                currentNumber.value = addComma(result);
            }
        }else{ 
            result = calc();
            expression.value = `${expression.value} ${Number(secondNumber)} =`;

            const splitResult = result.toString().split('.');
            const decimalLimit = 16-splitResult[0].length;

            if (result.toString().includes('.') && splitResult[1].length >= decimalLimit ){
                currentNumber.value = result.toFixed(decimalLimit);
            }else{
                currentNumber.value = result;
            }

            currentNumber.value = addComma(currentNumber.value);
        }

        firstNumber = result;
        secondNumber = '';
        calcOperator = '';
        result = 0;
    }

    endCalc = true;
};
