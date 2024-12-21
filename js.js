const countDisplay = document.getElementById("count-display");
const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
// Initial counter value
let count = 0;
// Update the display
function updateDisplay() {
countDisplay.textContent = count;
}
// Increase count
increaseBtn.addEventListener("click", function () {
count++;
updateDisplay();
});
// Decrease count
decreaseBtn.addEventListener("click", function() {
count--;
updateDisplay();
});
// Reset count
resetBtn.addEventListener("click", function() {
count = 0;
updateDisplay();
}); 