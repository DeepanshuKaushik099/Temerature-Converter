function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const resultElement = document.getElementById("result");
  
    if (isNaN(inputTemp)) {
      resultElement.textContent = "Please enter a valid temperature.";
      return;
    }
  
    let convertedTemp;
    if (fromUnit === "celsius") {
      convertedTemp = (inputTemp * 9/5) + 32;
      resultElement.textContent = `${inputTemp}°C is equal to ${convertedTemp.toFixed(2)}°F`;
    } else if (fromUnit === "fahrenheit") {
      convertedTemp = (inputTemp - 32) * 5/9;
      resultElement.textContent = `${inputTemp}°F is equal to ${convertedTemp.toFixed(2)}°C`;
    }
  }
  