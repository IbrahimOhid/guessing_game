// Selector
(function () {
  const formELe = document.querySelector("form");
  const inputNumEle = document.querySelector("#inputNum");
  const guessBtnEle = document.querySelector("#guessBtn");
  const newDivEle = document.querySelector("#newDiv");
  const correctNumEle = document.querySelector("#correctNum");
  const wrongNumEle = document.querySelector("#wrongNum");
  guessBtnEle.style.marginBottom = "20px";

  let correctNum = 0;
  let wrongNum = 0;
  //guessBtnEle.setAttribute('disabled', 'disabled');

  function guessConditionState() {
    const randomNum = Math.floor(Math.random() * 10);
    const inputValue = +inputNumEle.value;
    const newP = document.createElement("p");
    newDivEle.appendChild(newP);

    if (randomNum === inputValue) {
      correctNum++;
      correctNumEle.textContent = correctNum;
      newP.style.cssText = "border: 2px solid green; padding: 5px;";
      newP.textContent = `Wow great!!`;
    } else if (inputValue >= 10 || inputValue == 1 || inputValue == " ") {
      alert("Sorry! Please enter any number from 1-9.");
    } else {
      wrongNum++;
      wrongNumEle.textContent = wrongNum;
      newP.style.cssText = "border: 2px solid red; padding: 5px;";
      newP.textContent = `Sorry!! Wrong Digit. It Was  ${randomNum}`;
    }
    inputNumEle.value = "";
  }

  guessBtnEle.addEventListener("click", (e) => {
    e.preventDefault();
    guessConditionState();
  });
})();
