"use strict";

var mostrarReloj = function mostrarReloj() {
  var fecha = new Date();
  var hr = formatoHora(fecha.getHours());
  var min = formatoHora(fecha.getMinutes());
  var seg = formatoHora(fecha.getSeconds());
  document.getElementById('hora').innerHTML = "".concat(hr, ":").concat(min, ":").concat(seg);
  var meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  var dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
  var diaSemana = dias[fecha.getDay()];
  var dia = fecha.getDate();
  var mes = meses[fecha.getMonth()];
  var anio = fecha.getFullYear();
  var fechaTexto = "".concat(diaSemana, ", ").concat(dia, " ").concat(mes, " de ").concat(anio);
  document.getElementById('fecha').innerHTML = fechaTexto;
  document.getElementById('contenedor').classList.toggle('animar');
};

var formatoHora = function formatoHora(hora) {
  if (hora < 10) {
    hora = '0' + hora;
  }

  return hora;
};

setInterval(mostrarReloj, 1000);