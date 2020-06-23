function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "";


    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    setStyle(h);
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    setTimeout(showTime, 1000);

}

function setStyle(time) {
 if (time > 8 && time < 19){
    document.body.style.background = '#fcbf49';
  }
  else {
    document.body.style.background = '#023e8a';
  }
}

showTime();
