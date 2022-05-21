var modal1 = document.getElementById("popup1");

var btn1 = document.getElementById("Storehouse10");

btn1.onclick = function () {
  modal1.style.display = "block";
};

var modal2 = document.getElementById("popup2");

var btn2 = document.getElementById("Boathouse4");

btn2.onclick = function () {
  modal2.style.display = "block";
};

var modal3 = document.getElementById("popup3");

var btn3 = document.getElementById("Garden");

btn3.onclick = function () {
  modal3.style.display = "block";
};

var modal4 = document.getElementById("popup4");

var btn4 = document.getElementById("MastPond");

btn4.onclick = function () {
  modal4.style.display = "block";
};

var modal5 = document.getElementById("popup5");

var btn5 = document.getElementById("Statue");

btn5.onclick = function () {
  modal5.style.display = "block";
};

var modal6 = document.getElementById("popup6");

var btn6 = document.getElementById("CellBlock1");

btn6.onclick = function () {
  modal6.style.display = "block";
};

var modal7 = document.getElementById("popup7");

var btn7 = document.getElementById("Boathouse7");

btn7.onclick = function () {
  modal7.style.display = "block";
};

var modal8 = document.getElementById("popup8");

var btn8 = document.getElementById("Boathouse6");

btn8.onclick = function () {
  modal8.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
  if (event.target == modal8) {
    modal8.style.display = "none";
  }
};
