//Este ejercico genera una cita segun los dias de la semana
var yearDayNumber = prompt("Indica el número de día que te gustaría una cita:")
var janfirstDayNumber = yearDayNumber % 7;
if(yearDayNumber>=0&&yearDayNumber<=365){
	var janfirstDayNumber = yearDayNumber % 7;
if(janfirstDayNumber==0){
	 var cita = prompt("Indica la hora en la que quieres una cita: ");
	 if(cita=>9&&cita<=18){
		alert("El dia fue martes y tu cita será a las " + cita +"horas"); 
	 }else{
		 alert("Lo sentimos no es horario laboral ")
	 }
		 
	 }
}else if(janfirstDayNumber==1){
	alert("El dia fue martes");
}else if(janfirstDayNumber==2){
	alert("El dia fue miércoles");
}else if(janfirstDayNumber==3){
	alert("El dia fue jueves");
}else if(janfirstDayNumber==4){
	alert("El dia fue viernes");
}else if(janfirstDayNumber==5){
	alert("El dia fue sábado");
}else if(janfirstDayNumber==6){
	alert("El dia fue domingo");
}else{
	alert("Lo sentimos el año solo tiene 365 días");
};

