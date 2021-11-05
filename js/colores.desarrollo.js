"use strict";

var color = document.querySelector('#color');
var selection = document.querySelector('#salida');
color.addEventListener('input', function () {
  var value = color.value;
  salida.innerHTML = value;
  salida.style.background = value;
  salida.style.color = '#fff';
});