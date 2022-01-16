//Este ejercico genera una cita segun los dias del año considerando que el dia 1 es lunes
var yearDayNumber = prompt("Indica el número de día  del año en que te gustaría una cita:")
var cita = prompt("Indica la hora en la que quieres una cita: ");
var janfirstDayNumber = yearDayNumber % 7;
function date(yearDayNumber,cita,janfirstDayNumber){
if(yearDayNumber>=0&&yearDayNumber<=365&&cita>=9&&cita<=18){
if(janfirstDayNumber==0){
	alert("Tu cita será el domingo a las: " + cita + " horas");
}else if(janfirstDayNumber==1){
	alert("Tu cita será el lunes a las: " + cita + " horas");
}else if(janfirstDayNumber==2){
	alert("Tu cita será el martes a las: " + cita + " horas");
}else if(janfirstDayNumber==3){
	alert("Tu cita será el miércoles a las: " + cita + " horas");
}else if(janfirstDayNumber==4){
	alert("Tu cita será el jueves a las: " + cita + " horas");
}else if(janfirstDayNumber==5){
	alert("Tu cita será el viernes a las: " + cita + " horas");
}else if(janfirstDayNumber==6){
	alert("Tu cita será el sabádo las: " + cita + " horas");
}else{
	alert("Lo sentimos tu cita no puede ser consertada");
}
}else{
	alert("Lo sentimos tu cita no puede ser consertada");
}};
date(yearDayNumber,cita,janfirstDayNumber);
