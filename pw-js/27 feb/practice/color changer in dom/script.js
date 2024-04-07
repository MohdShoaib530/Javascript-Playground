// background color change

const btn = document.getElementById("button");
const colorChange = () =>  {
    let val = "0123456789ABCDEF";
    let cons = "#";
    for (let i = 0; i < 6; i++){
        cons = cons + val[Math.floor(Math.random() * 16)]
        
    }
    return cons;
};

function colorChangeRandom (){
    document.body.style.backgroundColor = colorChange();
};
btn.addEventListner("click", colorChangeRandom)