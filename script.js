const startDate = new Date("2023-04-01T19:00:00");

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('timer').innerHTML = 
    `${years} anos, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos juntos! ❤️`;
}

updateTimer();
setInterval(updateTimer, 1000);

const playButton = document.getElementById("playButton");
const audio = document.getElementById("backgroundMusic");

playButton.addEventListener("click", () => {
  audio.play().then(() => {
    playButton.style.display = "none";
  }).catch((error) => {
    console.log("Erro ao tentar tocar a música: ", error);
  });
});
