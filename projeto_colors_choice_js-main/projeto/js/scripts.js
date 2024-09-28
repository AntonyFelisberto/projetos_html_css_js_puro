const colors = ["Red", "Green", "Yellow", "Blue", "Purple", "Gray", "Black"];
const btn = document.getElementById("btn");
const span = document.querySelector(".color");

console.log(btn);
btn.addEventListener("click", function() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = colors[randomColor];
    span.textContent = colors[randomColor];
});

function getRandomColor() {
    return Math.floor(Math.random() * colors.length);
}