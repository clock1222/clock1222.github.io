
$(document).ready(function(){
	$('#fullScreenSupport').html(
  	screenfull.enabled
    ? '瀏覽器支援全螢幕API'
    : '瀏覽器不支援全螢幕API');
});

$('#fullScreen').click(function() {
  if (screenfull.enabled) {
    screenfull.request();
  }
});

$('#imageFullScreen').click(function() {
  if (screenfull.enabled) {
    screenfull.request(document.getElementById('image'));
  }
});

$('#cancelFullScreen').click(function() {
  if (screenfull.enabled) {
    screenfull.exit();
  }
});
