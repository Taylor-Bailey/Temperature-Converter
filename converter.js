console.log("temperature converter: ENGAGED");
let inTemp = document.getElementById("inTemp");
// let outTempId. = document.getElementsByClassName("outTempId.");
let outTempId = document.getElementById("outTempId");
let celsius = document.getElementById("cel");
let fahrenheit = document.getElementById("fah");
let convert = document.getElementById("convert");
let clear = document.getElementById("clear");
let body = document.getElementById("body");

// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
body.addEventListener("keydown", function pressEnter(keyEvent){
  // console.log("pressed Enter", keyEvent);
  if (keyEvent.keyCode === 13) {
  // console.log("the enter key work");
  checkTemp(event);
  }
});


// If the temperature is greater than 90F/32C the color of the converted temperature should be red. If the temperature is greater than the Plank Temp, Print image to dom of Spaghet Bear saying "That's-A WAY TOO HOT"
// If the temperature is less than 32F/0C the color of the converted temperature should be blue. If the temperature is less than absolute zero, Print image to dom of Spaghet Bear saying "That's-A WAY TOO COLD"
// For any other temperature, the color should be green.

function toCelsius() {
  let convertC = (inTemp.value - 32) * .5556;
  outTempId.innerHTML = `${convertC.toFixed()} &#176;C`;
  console.log("Celsius Conversion Engaged: ", convertC.toFixed());
  if(convertC > 32 &&  convertC <= 141700000000000000000000000000000){ //above 32 degrees C but below planck temp
    outTempId.id= "redAF";
    body.idName = "body";
    message.innerHTML = "TOO HOT TO TOUCH-A MY SPAGHET!"
  }else if(convertC < 0 && convertC > -273.15){ //below freezing but above absolute zero
    outTempId.id = "blueAF";
    body.id = "body";
    message.innerHTML = "TOO COLD TO TOUCH-A MY SPAGHET!"
  }else if(convertC <= 32 && convertC >= 0){ //goldylocks zone
    outTempId.id = "greenAF";
    body.id = "body";
    message.innerHTML = "SOMEBODY TOUCH-A MY SPAGHET!"
  }else if(convertC < -273.15){ //at or below absolute zero
    outTempId.id = "coldAF";
    body.id = "body2";
    message.innerHTML = "THAT-A SPAGHET IS-A IMPOSSIBLE!";
  }else if(convertC >= 141700000000000000000000000000000){ //at or above planck
    outTempId.id = "hotAF";
    body.id = "body3";
    message.innerHTML = "THAT-A SPAGHET IS-A IMPOSSIBLE!";
  }
};

function toFahrenheit() {
  let convertF = (inTemp.value * 1.8) + 32;
  outTempId.innerHTML = `${convertF.toFixed()} &#176;F`;
  if(convertF > 90 && convertF <= 25500000000000000000000000000000){ //higher than 90 degrees but below planck temp
    outTempId.id = "redAF";
    body.id = "body";
    message.innerHTML = "TOO HOT TO TOUCH-A MY SPAGHET!"
  }else if(convertF < 32 && convertF > -459.67){ //below freezing but above absolute zero
    outTempId.id = "blueAF";
    body.id = "body";
    message.innerHTML = "TOO COLD TO TOUCH-A MY SPAGHET!"
  }else if(convertF <= 90 && convertF >= 32){ // goldylocks zone
    outTempId.id = "greenAF";
    body.id = "body";
    message.innerHTML = "SOMEBODY TOUCH-A MY SPAGHET!"
  }else if(convertF <= -459.67){ //at or below absolute zero
    outTempId.id = "coldAF";
    body.id = "body2";
    message.innerHTML = "THAT-A SPAGHET IS-A IMPOSSIBLE!";
  }else if(convertF >= 25500000000000000000000000000000){ //at or above planck
    outTempId.id = "hotAF";
    body.id = "body3";
    message.innerHTML = "THAT-A SPAGHET IS-A IMPOSSIBLE!";
  }
};

// This function should determine which conversion should happen based on which radio button is selected.
function checkTemp(event) {
  console.log("checked temp enganged");
  if(celsius.checked === true) {
    event.preventDefault();
    toFahrenheit();  
    console.log("celsius check enganged");
  }else if(fahrenheit.checked === true){
    event.preventDefault();
    toCelsius();
    console.log("fahrenheit check enganged");
  }
};

// Assign a function to be executed when the button is clicked
convert.addEventListener("click", checkTemp);

//clear input/output field
removeMessage = () => {
    inTemp.value = "";
    outTempId.id = "outTempId";
    outTempId.innerHTML = "";
}
clear.addEventListener("click", removeMessage);
  
 