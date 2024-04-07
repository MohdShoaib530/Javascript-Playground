
const box = document.getElementById("box");
box.addEventListener("click",colorchange);
function colorchange() {
    box.style.backgroundColor = randomColor();
};
function randomColor() {
    let color = "#";
    let hexChars = "1234567890ABCDEF";
    for ( let i = 0; i < 6; i++){
    color +=  hexChars[Math.floor(Math.random()*16)]
    }
    return color;
    
}
