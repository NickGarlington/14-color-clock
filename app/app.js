setInterval(() => {
  let time = new Date();
  console.log(time);

  let hours = padNumber(time.getHours());
  let minutes = padNumber(time.getMinutes());
  let seconds = padNumber(time.getSeconds());

  let percentMinute = time.getSeconds() / 60;
  let totalWidth = 73;
  console.log(percentMinute);

  document.querySelector("#timerBar").style.width = (percentMinute * totalWidth) + "px";

  document.querySelector("#clock").innerHTML = `${hours} : ${minutes} : ${seconds}`;

}, 1000)

function padNumber(num) {
  if (num < 10) {
    return "0" + String(num);
  }
  else {
    return String(num);
  }
}
