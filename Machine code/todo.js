
var todolist = document.getElementsByTagName("li");
var i;
for (i = 0; i < todolist.length; i++) {
  var myspan = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  myspan.className = "deletebutton";
  myspan.appendChild(txt);
  todolist[i].appendChild(myspan);
}

var deletebutton = document.getElementsByClassName("deletebutton");
var i;
for (i = 0; i < deletebutton.length; i++) {
  deletebutton[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// adding a to do list
function newElement() {
  var li= document.createElement("li");
  var val = document.getElementById("input").value;
  var t = document.createTextNode(val);
  li.appendChild(t);
  if (val === '') {
    alert("add a todo");
  } else {
    document.getElementById("ul").appendChild(li);
  }
  document.getElementById("input").value = "";

  var myspan = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  myspan.className = "deletebutton";
  myspan.appendChild(txt);
  li.appendChild(myspan);

  for (i = 0; i < deletebutton.length; i++) {
    deletebutton[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}