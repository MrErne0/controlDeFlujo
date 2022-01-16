//Este ejericio da verdadero o falso para si se cumplen 2 condisiones 

var dayNumber = 5;
var hourNumber = 16;
function businessHours(dayNumber, hourNumber){
    if(dayNumber>=0&&dayNumber<=6){
        if(hourNumber>=9 && hourNumber<=18){
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
    else {
        console.log(false);
    }
};
businessHours(dayNumber, hourNumber);