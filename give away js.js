const targetDate = new Date('2024-03-25T00:00:00').getTime();
const timeInterval = setInterval(updateCountdown, 1000);
function updateCountdown(){
  const now = new Date().getTime();
  const distance = targetDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 ));
  const seconds = Math.floor((distance % (1000 * 60 )) / 1000);
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    if (distance < 0){
      clearInterval(timeInterval);
      countdownElement.innerHTML = 'Giveaway Expired.';
    }
}
