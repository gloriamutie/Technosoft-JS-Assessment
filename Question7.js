function load() {

    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
      }
    };
    req.open("GET", "www.example.com/api/get/1", true);
    req.send();
  }