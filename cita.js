//Este ejericio genera una cita considerando que todos los dias se trabaja

var hourNumber = prompt("Indica la hora de la cita:");
var dayNumer = prompt("Indica el día de la cita:");
if(hourNumber>=9&&hourNumber<=18){
	alert("Tu cita será el día " + dayNumer + " a las " + hourNumber);
}else{
	alert("Lo sentimos no es horario laboral");
};
