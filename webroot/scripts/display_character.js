var character_select1 = document.getElementById("character1");

var btn1 = document.getElementById("select1");

btn1.onclick = function () {
  character_select1.style.display = "block";
  character_select2.style.display = "none";
  character_select3.style.display = "none";
};

var character_select2 = document.getElementById("character2");

var btn2 = document.getElementById("select2");

btn2.onclick = function () {
  character_select2.style.display = "block";
  character_select3.style.display = "none";
  character_select1.style.display = "none";
};

var character_select3 = document.getElementById("character3");

var btn3 = document.getElementById("select3");

btn3.onclick = function () {
  character_select3.style.display = "block";
  character_select2.style.display = "none";
  character_select1.style.display = "none";
};
