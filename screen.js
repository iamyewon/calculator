
// 숫자를 새로 입력할 때 되돌려야함 
// input 맨 뒤에서 잘리는 경우가 생김 
// 방법 좀 더 찾아보기 
// div만들어서 width 가지고 .... 

// const addText = () => {
//     const currentWidth = currentNumber.offsetWidth;
    
//     // 입력된 텍스트의 너비를 구합니다.
//     const textWidth = getTextWidth(currentNumber.value, getComputedStyle(currentNumber).font);
//     // 입력된 텍스트의 너비가 입력 요소의 너비보다 크거나 같을 때
//     if (textWidth >= currentWidth) {
//         // 현재 글자 크기를 가져옵니다.
//         const currentFontSize = parseFloat(window.getComputedStyle(currentNumber).fontSize);
//         // 글자 크기를 조절합니다.
//         currentNumber.style.fontSize = (currentFontSize * 0.92) + 'px'; // 90% 크기로 축소
//     }
// }

// // 텍스트의 너비를 반환하는 함수
// const getTextWidth = (text, font) => {
//     // 캔버스 요소를 생성하여 텍스트의 너비를 계산
//     const canvas = document.createElement('canvas');
//     const context = canvas.getContext('2d');
//     context.font = font;
//     const metrics = context.measureText(text);
//     return metrics.width;
// }


// const hiddenCurrent = document.querySelector('.hidden-current');
// hiddenCurrent.innerHTML='<p>123</p>'
// hiddenCurrentWidth = hiddenCurrent.clientWidth;
// console.log('hiddenCurrentWidth >>>', hiddenCurrentWidth);



