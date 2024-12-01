function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let attempts = 9;
let sortedNumber = getRandomIntInclusive(1, 100);
const feedback = document.getElementById("feedback");

const guessButton = document
  .getElementById("guessButton")
  .addEventListener("click", () => {
    const guess = Number(document.getElementById("guess").value);

    if (attempts > 0) {
      attempts--;

      if (guess === sortedNumber) {
        feedback.style.color = "green";
        feedback.innerHTML = "Parabéns, você acertou!";
      } else if (guess > sortedNumber) {
        feedback.style.color = "red";
        feedback.innerHTML = `Palpite alto! Tente novamente. Você tem ${attempts} chances`;
      } else if (guess < sortedNumber) {
        feedback.style.color = "red";
        feedback.innerHTML = `Palpite baixo! Tente novamente. Você tem ${attempts} chances`;
      }
    }

    if (attempts === 0 && guess !== sortedNumber) {
      feedback.style.color = "red";
      feedback.innerHTML = `Você perdeu! O número era ${sortedNumber}`;
      guessButton.disabled = true;
    }
  });
