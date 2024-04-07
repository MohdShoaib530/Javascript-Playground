//  Append child

let title = document.createElement("h2");
title.className = "hula";
title.style.fontSize = "27px";
title.textContent = "hello namaste"
console.log(title);
document.body.appendChild(title);

// remove child 

let ul = document.querySelector("ul");
console.log(ul);
let lists = document.querySelectorAll("li");
console.log(lists);
for(list of lists){
    ul.removeChild(list)
}