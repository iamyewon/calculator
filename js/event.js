const handlePointBtn = (e) => {
    // 계산이 끝난 직후 . 을 누르면 0. 으로 숫자 시작하도록 
    if(endCalc){
        expression.value = '';
        currentNumber.value = '0';
        hiddenCurrent.textContent = currentNumber.value;
        firstNumber = '';
        endCalc = false;
    }
    // 소수점이 이미 있는 경우 함수 종료 
    if (currentNumber.value.includes('.')) {
        return;
    } 

    currentNumber.value += '.';
    hiddenCurrent.textContent = currentNumber.value;
    handleCurrentNumberFont();
};


const handleDeleteBtn = () => {
    currentNumber.value = removeComma(currentNumber.value);
    currentNumber.value = addComma(currentNumber.value.slice(0, -1));

    // TODO - removeComma - process - addComma
    // const number = test(currentNumber.value);
    // number.slice(0,1);

    hiddenCurrent.textContent = currentNumber.value;

    enlargeFont();
};


const handlePercentBtn = () => {
    currentNumber.value = addComma(Math.round((removeComma(currentNumber.value) / 100) * 1e10) / 1e10)
    hiddenCurrent.textContent = currentNumber.value;

    if(calcOperator === ''){
        firstNumber = currentNumber.value;
    }else{
        secondNumber = currentNumber.value;
    }
    handleCurrentNumberFont();
};


const handleInputNumber = (e) => {
    const btnValue = e.target.textContent.trim();    
    
    // 계산이 끝나고 Number 버튼 눌렀을 경우 
    if(endCalc){
        // inputValues('', null, '', '', '', null);
        expression.value = '';
        currentNumber.value = '';
        hiddenCurrent.textContent = currentNumber.value;
        firstNumber = '';
        endCalc = false;
    }

    // 입력 가능 숫자를 16자리로 제한 
    if(16-currentNumber.value.replace(/\D/g, '').length <= 0){
        return;
    }

    currentNumber.value = removeComma(currentNumber.value);

    // 0으로 시작하는 경우(0. 제외) 제일 앞의 0을 없애줌
    if (Number(currentNumber.value) === 0 && !currentNumber.value.includes('0.')) {
        currentNumber.value = '';
    }

    currentNumber.value += btnValue;

    // 누른 숫자를 첫번째 숫자에 넣어줄지, 두번째 숫자에 넣어줄지 
    if(calcOperator === ''){
        firstNumber = currentNumber.value;
    }else{
        secondNumber = currentNumber.value;
    }

    currentNumber.value = addComma(currentNumber.value);
    hiddenCurrent.textContent = currentNumber.value;
    handleCurrentNumberFont();
};



const handleOperatorBtn = (e) => {
    if(endCalc){
        expression.value = '';
        endCalc = false;
    }

    const btnValue = e.target.textContent.trim();
    expression.value += ` ${Number(removeComma(currentNumber.value))} ${btnValue}`;
    currentNumber.value = 0; 
    hiddenCurrent.textContent = currentNumber.value;

    // firstNumber가 없으면 firstNumber = 0
    if(firstNumber === ''){
        firstNumber = '0';
    }

    // operator 없는 경우 버튼값 넣어줌
    if(calcOperator === ''){ 
        calcOperator = btnValue;
    }else{ // operator 있는 경우
        result = calc();
        firstNumber = result;
        secondNumber = '';
        calcOperator = btnValue;
    }
    handleCurrentNumberFont();
};


const handleEqualsSign = () => {
    if(endCalc){
        return;
    }

    /* secondNumber가 있는경우 : 계산진행 */
    if(secondNumber !== '') {
        calculateTwoNumbers();
        clearCalculator(clearType.END);
        return; 
    }
    
    /* secondNumber가 없는경우 */
    if(calcOperator !== ''){
        // 연산자가 있으면 secondNumber = firstNumber 로 계산 ex) 5 + =  ==> 5 + 5 =
        secondNumber = firstNumber;
        result = calc();
        expression.value += ` ${Number(secondNumber)} =`;
        currentNumber.value = addComma(result);
    } else {
        // 연산자가 없으면 firstNumber = result  ex) 5 = 5 
        expression.value = `${Number(firstNumber)} =`
        result = Number(firstNumber);
        currentNumber.value = addComma(result);
    }
    clearCalculator(clearType.END);
};

// const test = (value, processFunc) => {
//     removeComma(value);
//     processFunc();
//     return addComma(value);
// }