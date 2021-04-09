function validate() {
    var firstName = document.getElementById('firstname').value;
    var  checkMe = document.getElementById('checkme').value;
    if (firstName == ""){
        alert("Kindly fill your name");
        return false;
    }else if(checkMe == ""){
        alert("Kindly check the box");
        return false;
    }
}
