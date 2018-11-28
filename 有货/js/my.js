var oNav = document.getElementsByClassName('nav')[0];
var oA1 = document.getElementsByClassName('a-4')[0];
let bool = false;
oNav.onclick = function(){
    bool = !bool;
    if(bool){
        oA1.style.display = 'block';
    }else{
        oA1.style.display = 'none';
    }
}













