var d = new Date();
var y = d.getFullYear();
var m = d.getMonth()+1;
var da = d.getDate();
var day = d.getDay()+1;
if(day==1){
	day="Sunday";
}
else if(day==2){
	day="Monday";
}
else if(day==3){
	day="Tuesday";
}
else if(day==4){
	day="Wednesday";
}
else if(day==5){
	day="Thursday";
}
else if(day==6){
	day="Friday";
}
else if(day==7){
	day="Saturday";
}
else{
	day="Wrong input";
}
document.getElementById("currentTime").innerHTML = "Date: "+y+"-"+m+"-"+da+"& time: ";
//this getElementById and inner.HTML are system-defined in built....