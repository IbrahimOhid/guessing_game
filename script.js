// Selector
(function () {
    const inputNumEle = document.querySelector('#inputNum');
    const guessBtnEle = document.querySelector('#guessBtn');
    const newDivEle = document.querySelector('#newDiv');
    const correctNumEle = document.querySelector('#correctNum');
    const wrongNumEle = document.querySelector('#wrongNum');
    guessBtnEle.style.marginBottom = '20px';

    let correctNum = 0;
    let wrongNum = 0;
    guessBtnEle.setAttribute('disabled', 'disabled');

    


    function guessConditionState() {
        const randomNum = Math.floor(Math.random() * 10);
        const inputValue = +inputNumEle.value;
        const newP = document.createElement('p');
        newDivEle.appendChild(newP);

        if (randomNum === inputValue) {
            correctNum++;
            correctNumEle.textContent = correctNum;
            newP.style.cssText = 'border: 2px solid green; padding: 5px;'
            newP.textContent = `Wow great!!`;
        }
        else {
            wrongNum++;
            wrongNumEle.textContent = wrongNum;
            newP.style.cssText = 'border: 2px solid red; padding: 5px;';
            newP.textContent = `Sorry!! Wrong Digit. It Was  ${randomNum}`;

        }
        inputNumEle.value = '';
    }

    function mainGuessState(){
        const inputValue = +inputNumEle.value;
        console.log(inputValue)
        if(inputValue <= 9){
            guessBtnEle.removeAttribute('disabled');
        }
    }

    guessBtnEle.addEventListener('click', (e) => {
        e.preventDefault();
        mainGuessState();
        guessConditionState();
        

    })
})();






























