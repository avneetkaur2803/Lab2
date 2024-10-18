// Step 1: Declare and initialize constants for the HTML elements
// Get references to the input slider elements for Red, Green, and Blue colors
const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');

// Get a reference to the page body element to change the background color
const pageBody = document.body;

// Step 2: Build event handlers to call a function when the value of the range sliders changes
// Event listener for the Red color slider
redSlider.addEventListener('input', updateBackgroundColor);

// Event listener for the Green color slider
greenSlider.addEventListener('input', updateBackgroundColor);

// Event listener for the Blue color slider
blueSlider.addEventListener('input', updateBackgroundColor);

// Step 3: Function to change the background color of the page based on slider values
function updateBackgroundColor() {
    // Retrieve the current values from the Red, Green, and Blue sliders
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    // Create a new RGB color string based on the slider values
    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    // Set the background color of the page body to the new RGB color
    pageBody.style.backgroundColor = rgbColor;

    // Log the current RGB values to the console for debugging
    console.log(`Background color changed to: ${rgbColor}`);
}


