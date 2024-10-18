// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Get range input elements
    const redInput = document.getElementById('red');
    const greenInput = document.getElementById('green');
    const blueInput = document.getElementById('blue');

    // Function to change the background color
    function changeBackgroundColor() {
        const red = redInput.value;
        const green = greenInput.value;
        const blue = blueInput.value;
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }

    // Add event listeners to the range inputs
    redInput.addEventListener('input', changeBackgroundColor);
    greenInput.addEventListener('input', changeBackgroundColor);
    blueInput.addEventListener('input', changeBackgroundColor);
});
