var timing = 0,
    times = 0,
    errortimes = 0,
    oktimes = 0;
var Nowtime = new Date();
var NowTiming = Nowtime.getTime();
var jsURL = new URLSearchParams(window.location.search);
jsURL.set('ErrorTimeStart', NowTiming);
var jsnewURL = window.location.protocol + '//' + window.location.host + window.location.pathname + '?' + jsURL.toString();
window.history.replaceState({path: jsnewURL}, '', jsnewURL);
function timingup(){
  var StartTiming = new URLSearchParams(window.location.search).get('ErrorTimeStart');
  var Nowtime = new Date();
  var NowTiming = Nowtime.getTime();
  var NTing = NowTiming - StartTiming;
  var NTH = Math.floor(NTing / (1000 * 60 * 60)).toString().padStart(2, '0');
  var NTM = Math.floor((NTing % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
  var NTS = Math.floor((NTing % (1000 * 60)) / 1000).toString().padStart(2, '0');
  document.getElementById("timingH").innerText = NTH;
  document.getElementById("timingM").innerText = NTM;
  document.getElementById("timingS").innerText = NTS;
}
window.setInterval("timingup()", 0);
