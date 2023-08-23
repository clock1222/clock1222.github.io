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
  var StartTiming = new URLSearchParams(window.parent.location.search).get('ErrorTimeStart');
  var Nowtime = new Date();
  var NowTiming = Nowtime.getTime();
  var NTing = NowTiming - StartTiming;
  var NTH = Math.floor(NTing / (1000 * 60 * 60)).toString().padStart(2, '0');
  var NTM = Math.floor((NTing % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
  var NTS = Math.floor((NTing % (1000 * 60)) / 1000).toString().padStart(2, '0');
  document.getElementById("timingH").innerText = NTH;
  document.getElementById("timingM").innerText = NTM;
  document.getElementById("timingS").innerText = NTS;
  //Times
  if(new URLSearchParams(window.parent.location.search).get('ErrorTimes') == null){
    document.getElementById("times").innerText = 0;
  }else{
    document.getElementById("times").innerText = (parseInt(new URLSearchParams(window.parent.location.search).get('ErrorTimes'))+parseInt(new URLSearchParams(window.parent.location.search).get('OkTimes'))).toString().padStart(2, '0');
  }
  document.getElementById("errortimes").innerText = new URLSearchParams(window.parent.location.search).get('ErrorTimes').toString().padStart(2, '0');
  document.getElementById("oktimes").innerText = new URLSearchParams(window.parent.location.search).get('OkTimes').toString().padStart(2, '0');
  //Oking
  if(parseInt(new URLSearchParams(window.parent.location.search).get('OkTimes'))>1){
    document.getElementById("txt").innerText = "與伺服器連線成功！";
  }
}
window.setInterval("timingup()", 0);
