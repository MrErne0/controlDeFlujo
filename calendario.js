//Este ejercicio te indica que día de la semana cayó el día que tu le indiques del año pasado considerando que inicio el año en lunes
var yearDayNumber = prompt("Indica el número de día que te gustaría saber que cayó:")
var janfirstDayNumber = yearDayNumber % 7;
function getDayNumber(yearDayNumber,janfirstDayNumber){
if(yearDayNumber>=0&&yearDayNumber<=365){
	var janfirstDayNumber = yearDayNumber % 7;
if(janfirstDayNumber==0){
	alert("El día fue lunes");
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
}else{
		alert("Lo sentimos el año solo tiene 365 días");
};
};
getDayNumber(yearDayNumber,janfirstDayNumber);

