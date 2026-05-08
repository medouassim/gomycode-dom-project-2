// event handler to wait for the dom content to be loaded 

document.addEventListener("DOMContentLoaded", () => {
    // selecting elements by IDs 
    const changeColorButton = document.getElementById('change-color-btn')
    const colorBox = document.getElementById('color-box')
    console.log(colorBox, changeColorButton)
    // a function that generates random colors
    const getRandomColor = () => {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 40 + 60); 
    const l = Math.floor(Math.random() * 30 + 35); 
    return `hsl(${h}, ${s}%, ${l}%)`;
    }
    // click even handler on the button to change the color of the box when clicked 
    changeColorButton.addEventListener("click", () => {
        colorBox.style.backgroundColor = getRandomColor()
    })
}
)

