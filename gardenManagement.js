const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

//watering control 
if(temperature > 80){
  console.log("Watering on");
}else{
  console.log("Watering off");
}

//garden lights control
if(timeOfDay === "evening" || timeOfDay === "night"){
  console.log("Lights on");
}else{
  console.log("Lights off")
}

//soil moisture adjustment
while(soilMoisture < 40){
  console.log(soilMoisture);
  soilMoisture +=5;
}

console.log(40);