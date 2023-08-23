function pingWebsite(url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Website is reachable.");
        } else {
          console.log("Website is not reachable. Status code: " + xhr.status);
        }
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  }
  
  pingWebsite("https://1514.myqnapcloud.com");  