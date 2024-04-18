// 입력된 CurrentNumber의 width가 일정 길이 이상이면 폰트 줄임 
const handleCurrentNumberFont = () => {
    const hiddenCurrentWidth = hiddenCurrent.clientWidth;
    const currentFontSize = parseFloat(window.getComputedStyle(currentNumber).fontSize);
    const hiddenCurrentFontSize = parseFloat(window.getComputedStyle(hiddenCurrent).fontSize);

    if(hiddenCurrentWidth >= 280){
        currentNumber.style.fontSize = (currentFontSize * 0.94) + 'px'; 
        hiddenCurrent.style.fontSize = (hiddenCurrentFontSize * 0.94) + 'px'; 
    }
}

// delete버튼 누를 때 CurrentNumber의 width가 일정 길이 이하면 폰트 키움 
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

// clear 버튼으로 모두 지웠을 때 폰트 크기 초기화 
const resetFont = () => {
    currentNumber.style.fontSize = '40px'; 
    hiddenCurrent.style.fontSize = '40px'; 
}
