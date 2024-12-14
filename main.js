const clock = document.getElementById("clock");
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

const date = document.getElementById("date");
function updateDate() {
  const nows = new Date();
  const days = String(nows.getDate()).padStart(2, "0");
  const months = String(nows.getMonth() + 1).padStart(2, "0");
  const years = String(nows.getFullYear()).padStart(2, "0");
  date.textContent = `${days}/${months}/${years}`;
}
setInterval(updateDate, 1000);
updateDate();
