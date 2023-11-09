function convertTemperature(source) {
    if (source === 'celsius') {
      const celsiusInput = document.getElementById('celsius');
      const celsiusValue = celsiusInput.value;
  
      // Convert Celsius to Fahrenheit
      const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
  
      // Update Fahrenheit input field
      document.getElementById('fahrenheit').value = fahrenheitValue.toFixed(2);
    } else if (source === 'fahrenheit') {
      const fahrenheitInput = document.getElementById('fahrenheit');
      const fahrenheitValue = fahrenheitInput.value;
  
      // Convert Fahrenheit to Celsius
      const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
  
      // Update Celsius input field
      document.getElementById('celsius').value = celsiusValue.toFixed(2);
    }
  }