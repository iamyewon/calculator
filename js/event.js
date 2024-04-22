/**
 * 소수점 버튼을 누를 때 호출되는 함수
 * @param {Event} e event
 * @author 웹팀 김예원 2024-04-22
 * @description 계산이 끝난 직후 .누르면 0. 으로 시작
 * @description 소수점이 이미 있는 경우 함수 종료 
 */
const handlePointBtn = (e) => {
    if(endCalc){
        inputScreenValues('', 0);
        inputCalcValues('', null, null);
        endCalc = false;
    }
    if (currentNumber.value.includes('.')) {
        return;
    } 

    inputCurrentNumber(currentNumber.value + '.');
    handleCurrentNumberFont();
};



/**
 * 지우기 버튼 누를 때 호출되는 함수 
 * @author 웹팀 김예원 2024-04-22
 */
const handleDeleteBtn = () => {
    inputScreenValues(null, addComma(removeComma(currentNumber.value).slice(0, -1)))
    enlargeFont();
};



/**
 * 퍼센트 버튼 누를 때 호출되는 함수
 * @author 웹팀 김예원 2024-04-22
 * @description 현재 입력된 숫자에서 1/100 계산
 */
const handlePercentBtn = () => {
    inputScreenValues(null, addComma(Math.round((removeComma(currentNumber.value) / 100) * 1e10) / 1e10));

    if(calcOperator === ''){
        inputFirstNumber(currentNumber.value);
    }else{
        inputSecondNumber(currentNumber.value);
    }
    handleCurrentNumberFont();
};



/**
 * 숫자 버튼을 누를 때 호출 되는 함수 
 * @param {Event} e event
 * @author 웹팀 김예원 2024-04-22
 * @description =으로 결과 도출 후(계산이 끝난 직후) -> 새로운 계산 시작
 * @description 입력 숫자 길이는 총 16자리 
 * @description 숫자가 0으로 시작하면 0을 지워줌
 * 
 */
const handleInputNumber = (e) => {
    const btnValue = e.target.textContent.trim();    
    
    if(endCalc){
        inputScreenValues('', '');
        inputFirstNumber('');
        endCalc = false;
    }

    if(16-currentNumber.value.replace(/\D/g, '').length <= 0){
        return;
    }

    inputCurrentNumber(removeComma(currentNumber.value));

    if (Number(currentNumber.value) === 0 && !currentNumber.value.includes('0.')) {
        inputCurrentNumber('');
    }

    inputCurrentNumber(currentNumber.value + btnValue);

    if(calcOperator === ''){
        inputFirstNumber(currentNumber.value);
    }else{
        inputSecondNumber(currentNumber.value);
    }
    inputCurrentNumber(addComma(currentNumber.value))
    handleCurrentNumberFont();
};


/**
 * 연산자 버튼을 누를 때 호출 되는 함수 
 * @param {Event} e event
 * @author 웹팀 김예원 2024-04-22
 * @description =으로 결과 도출 후(계산이 끝난 직후) -> 결과값 + 연산자 
 * @description 입력숫자가 초기상태(0)일 때 누르면 0 + 연산자
 */
const handleOperatorBtn = (e) => {
    if(endCalc){
        inputExpreesion('');
        endCalc = false;
    }

    const btnValue = e.target.textContent.trim();

    inputScreenValues(expression.value + ` ${Number(removeComma(currentNumber.value))} ${btnValue}`, 0)

    if(firstNumber === ''){
        inputFirstNumber(0);
    }

    if(calcOperator === ''){ 
        inputCalcOperator(btnValue);
    }else{
        result = calc();
        inputCalcValues(result, '', btnValue);
    }
    resetFont();    
};



/**
 * = 버튼을 누를 때 호출 되는 함수 
 * @author 웹팀 김예원 2024-04-22
 * @description secondNumber가 있으면 일반적인 계산 
 * @description secondNumber가 없지만 연산자가 있으면 firstNumber = secondNumber
 * @description secondNumber가 없고 연산자가 없으면 firstNumber = result
 */
const handleEqualsSign = () => {
    if(endCalc){
        return;
    }

    if(secondNumber !== '') {
        calculateTwoNumbers();
        clearCalculator(clearType.END);
        return; 
    }
    
    if(calcOperator !== ''){
        inputSecondNumber(firstNumber);
        inputResult(calc());
        inputScreenValues(expression.value + ` ${Number(secondNumber)} =`, addComma(result));
    } else {
        inputExpreesion(`${Number(firstNumber)} =`)
        inputResult(Number(firstNumber));
        inputCurrentNumber(addComma(result));
    }

    clearCalculator(clearType.END);
};


