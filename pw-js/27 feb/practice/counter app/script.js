const incrementBtn = document.getElementById("incremenatBtn");
const decrementBtn = document.getElementById("decrementBtn");
const restBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("restBtn")

// increment of values 
incrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerHTML);
    if(value > 0){
        displayValue.innerText = value - 1;

    } else {
        alert("Negative values are not allowed");
    }
});

// decrement of values 

decrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if(value => 10){
        alert("10+ values are not allowod");
    } else {
        displayValue.innerText = value + 1;
    }
})

// rest button 

resetBtn.addEventListener("click", () => {
    displayValue.innerText = 0;
})