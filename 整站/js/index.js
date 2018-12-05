var oHeader = document.getElementById('header');
var str = ['1.jpeg','2.jpeg'];
let i = 0;
function show(){
    i++
    if(i==str.length) i = 0;
    oHeader.style.backgroundImage = "url('images/"+str[i]+"')";
}
setInterval(show,2600);