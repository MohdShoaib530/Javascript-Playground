//   paragraph

let para = document.querySelector("p");
para.innerText = "hello Namaste";
console.log(para);

// button

let btn = document.addEventListener("dblclick", hey);
function hey(){
    const element = document.getElementById("ids");
    element.style.color = "red";
    element.style.backgroundColor = ("black");
    element.style.fontSize = "65px";
    element.style.borderRadius = "25px";
}