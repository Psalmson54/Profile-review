document.getElementById("convert-button").addEventListener("click", function() {
    const tempValue = parseFloat(document.getElementById("temperature").value);
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;
    
    let convertedValue;
    
    if (fromUnit === "C") {
      if (toUnit === "F") {
        convertedValue = (tempValue * 9/5) + 32;
      } else if (toUnit === "K") {
        convertedValue = tempValue + 273.15;
      } else {
        convertedValue = tempValue;
      }
    } else if (fromUnit === "F") {
      if (toUnit === "C") {
        convertedValue = (tempValue - 32) * 5/9;
      } else if (toUnit === "K") {
        convertedValue = (tempValue - 32) * 5/9 + 273.15;
      } else {
        convertedValue = tempValue;
      }
    } else if (fromUnit === "K") {
      if (toUnit === "C") {
        convertedValue = tempValue - 273.15;
      } else if (toUnit === "F") {
        convertedValue = (tempValue - 273.15) * 9/5 + 32;
      } else {
        convertedValue = tempValue;
      }
    }
    
    document.getElementById("result").innerText = `Result: ${convertedValue.toFixed(2)} ${toUnit}`;
  });
  