let Divl = document.getElementById("div-left");
let Divr = document.getElementById("div-right");
let oInput = document.getElementById("input");
let oExit = document.getElementById("exit");
oInput.onclick = function(){
    Divl.style.display = "none";
    Divr.style.width = "80%";
    Divr.style.transition = ".5s";
    oExit.style.display = "block";
}
oExit.onclick = function(){
    Divl.style.display = "block";
    Divl.style.transition = ".5s";
    Divr.style.width = "42%";
    oExit.style.display = "none";
}


