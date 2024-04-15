const handleCurrentNumberFont = () => {
    const hiddenCurrentWidth = hiddenCurrent.clientWidth;
    const currentFontSize = parseFloat(window.getComputedStyle(currentNumber).fontSize);
    const hiddenCurrentFontSize = parseFloat(window.getComputedStyle(hiddenCurrent).fontSize);

    if(hiddenCurrentWidth >= 300){
        currentNumber.style.fontSize = (currentFontSize * 0.94) + 'px'; 
        hiddenCurrent.style.fontSize = (hiddenCurrentFontSize * 0.94) + 'px'; 
    }
}

const enlargeFont = () => {
    const hiddenCurrentWidth = hiddenCurrent.clientWidth;
    const currentFontSize = parseFloat(window.getComputedStyle(currentNumber).fontSize);
    const hiddenCurrentFontSize = parseFloat(window.getComputedStyle(hiddenCurrent).fontSize);
    const expectFont = hiddenCurrentFontSize * 1.06;

    if(expectFont >= 40){
        currentNumber.style.fontSize = '40px'; 
        hiddenCurrent.style.fontSize = '40px'; 
        return;
    }else if(hiddenCurrentWidth <= 300){
        currentNumber.style.fontSize = (currentFontSize * 1.06) + 'px'; 
        hiddenCurrent.style.fontSize = (hiddenCurrentFontSize * 1.06) + 'px'; 
    }
}

const resetFont = () => {
    currentNumber.style.fontSize = '40px'; 
    hiddenCurrent.style.fontSize = '40px'; 
}



// display: none 일 때 clientWidth, offsetWidth => x
// input 자체 내부 text값만 계산하기 x 
// input이 글자에 따라 유동적으로 width 변경되도록 (max-width 주고) x

