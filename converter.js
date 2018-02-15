console.log("temperature converter: ENGAGED");
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.



// If the temperature is greater than 90F/32C the color of the converted temperature should be red. If the temperature is greater than the Plank Temp, Print image to dom of Spaghet Bear saying "That's-A WAY TOO HOT"


// If the temperature is less than 32F/0C the color of the converted temperature should be blue. If the temperature is less than absolute zero, Print image to dom of Spaghet Bear saying "That's-A WAY TOO COLD"


// For any other temperature, the color should be green.
function toCelsius () {

}

function toFahrenheit () {

}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter);

//clear input field
removeMessage = () => {
    inputTemp.value = "";
}
let inputTemp = document.getElementById("enterTemp");
document.getElementById("clear").addEventListener("click", removeMessage);
