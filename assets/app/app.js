const input = document.getElementById("input");
const addBtnGuess = document.getElementById("addBtnGuess");
const infoData = document.getElementById("infoData");
const messageData = document.getElementById("messageData");
const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
  location.reload();
});
const randomNum = Math.floor(Math.random() * 15 + 1);
let count = 5;
addBtnGuess.addEventListener("click", () => {

  --count;
  console.log(count);
  const inputValue = input.value;

  if (count <= 5 && count >= 1) {
    infoData.innerHTML = `Guessed numbers are: ${inputValue} <br/>
        Guess left: ${count}`;
    if (inputValue <= 0 || inputValue > 15) {
      messageData.innerHTML = "I said, enter a number between 1 and 15!🫥";
    } else if (inputValue > randomNum) {
      messageData.innerHTML = "Your guess is too high 😒";
    } else if (inputValue < randomNum) {
      messageData.innerHTML = "Your guess is too low 🤨";
    } else if (inputValue === randomNum) {
      messageData.innerHTML = "Congratulations! You guessed it! 👌🤠";
    } else {
      messageData.innerHTML = "Congratulations! You guessed it! 👌🤠";
    }
  } else if(count==0) {
    infoData.innerHTML = `Random number is: ${randomNum} <br/>
    Number of guesses: 🍕`;
  } else{
    location.reload();
  }
});
