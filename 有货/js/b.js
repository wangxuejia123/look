let oLogo = document.getElementById("logo");
let a = ['有货','Yoho!Buy'];
let pic = ['1.jpg','2.jpg','3.jpg','4.jpg'];
let oNav = document.getElementById("lunbo");
let oNav2 = document.getElementById("nav2");
let pic2 = ['main-box41.jpg','main-box42.jpg','main-box42.jpg'];
let i =0; let j = 0;
let w = 0;
function show(){
    i++;
    if( i == 2) i = 0;
   oLogo.innerText = a[i];
};
setInterval(show,4000);

function nav(){
    j++;
    if(j == 4) j = 0;
    oNav.src = "images/"+pic[j]; 
};
setInterval(nav,2000);
function nav2(){
    w++;
    if(w == pic2.length) w = 0;
    oNav2.src = "images/"+pic2[w];
}
setInterval(nav2,2000);