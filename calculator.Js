let display = document.getElementById('display');

//Function to append the clicked button value to the display
function appendValue(value) {
    display.value += value;
}

//Function to clear the display
function clearDisplay() {
    display.value = '';
}

//Funtion to calculate the result
function calculate() {
  try {
    display.value = eval(display.value);
  }catch (error) {
    alert("Invalid expression!");
  } 
}