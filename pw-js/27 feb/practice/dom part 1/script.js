// manuplating ids

let var1 = document.getElementById("one");
console.log(var1.innerText);
let var2 = document.getElementById("two");
console.log(var2.innerHTML);

// Manupulatin classes

let var3 = document.getElementsByClassName("sweet");
console.log(var3[2].innerText);
var3[1].innerText = "shoaib";

// Manupulation tagname

let var4 = document.getElementsByTagName("h1");
console.log(var4[1].innerText);
var4[2].innerText = "text changed";

// queryselector

let var5 = document.querySelector("h2")
console.log(var5);
var5.setAttribute("title", "shoaib");

let var6 = document.querySelector(".clss")
console.log(var6);
var6.className = "hunkaar";

let var7 = document.querySelector("#ids")
console.log(var7.innerText);
