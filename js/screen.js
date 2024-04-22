/**
 * CurrentNumber 폰트 줄임
 * @author 웹팀 김예원 2024-04-22
 * @description 입력된 CurrentNumber의 width가 일정 길이 이상이면 폰트 줄임 
 */
const handleCurrentNumberFont = () => {
    const hiddenCurrentWidth = hiddenCurrent.clientWidth;
    const currentFontSize = parseFloat(window.getComputedStyle(currentNumber).fontSize);
    const hiddenCurrentFontSize = parseFloat(window.getComputedStyle(hiddenCurrent).fontSize);

    if(hiddenCurrentWidth >= 280){
        currentNumber.style.fontSize = (currentFontSize * 0.94) + 'px'; 
        hiddenCurrent.style.fontSize = (hiddenCurrentFontSize * 0.94) + 'px'; 
    }
}



/**
 * CurrentNumber 폰트 키움
 * @author 웹팀 김예원 2024-04-22
 * @description delete버튼 누를 때 CurrentNumber의 width가 일정 길이 이하면 폰트 키움 
 */
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

// const handleResultFontSize = () => {
//     if(hiddenCurrent.clientWidth >= 315){
//         while(hiddenCurrent.clientWidth >= 315){
//             const currentFontSize = parseFloat(window.getComputedStyle(currentNumber).fontSize);
//             const hiddenCurrentFontSize = parseFloat(window.getComputedStyle(hiddenCurrent).fontSize);
//             currentNumber.style.fontSize = (currentFontSize * 0.94) + 'px'; 
//             hiddenCurrent.style.fontSize = (hiddenCurrentFontSize * 0.94) + 'px';
//         }
//     }
// }

/**
 * CurrentNumber 폰트 초기화
 * @author 웹팀 김예원 2024-04-22
 * @description currentNumber 한번에 모두 지웠을 때 폰트 크기 초기화
 */ 
const resetFont = () => {
    currentNumber.style.fontSize = '40px'; 
    hiddenCurrent.style.fontSize = '40px'; 
}

let hiddenCurrentObserver = new ResizeObserver(entries => {
    let resultHidden;
    let resultCur;
    
    for (let entry of entries) {
      const {contentRect} = entry;

    if(contentRect.width > 315){
        const currentFontSize = parseFloat(window.getComputedStyle(currentNumber).fontSize);
        const hiddenCurrentFontSize = parseFloat(window.getComputedStyle(hiddenCurrent).fontSize);
        
        resultCur = (currentFontSize * 0.94) + 'px'; 
        resultHidden = (hiddenCurrentFontSize * 0.94) + 'px';
      }
    }
    currentNumber.style.fontSize = resultCur;
    hiddenCurrent.style.fontSize = resultHidden;
});

hiddenCurrentObserver.observe(hiddenCurrent);
