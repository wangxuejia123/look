var oSpan = document.getElementsByClassName('span-1');
var oDiv = document.getElementsByClassName('div-1');
var oPictur = document.getElementById('pictur');
var oDianp = document.getElementsByClassName('dianzanp');
var oDiann = document.getElementsByClassName('dianzann');
var str = ['guang-1.jpg','guang-2.jpg','guang-3.jpg','guang-4.jpg','guang-5.jpg']
for(let i = 0; i<oSpan.length; i++){
    oSpan[i].onclick = function(){
        for(let j = 0; j<oSpan.length; j++){
            oSpan[j].className = 'span-1';
            oDiv[j].className = 'div-1';
        }
        oSpan[i].className = 'span span-1';
        oDiv[i].className = 'div div-1'
    }
}
  let i = 0;
function lb(){
   i++;
   if(i==str.length) {i = 0;}

   oPictur.src = 'images/'+str[i];
}
setInterval(lb,1000)
let bool = false;
oDianp[0].onclick = function(){
    let a = 24;
    bool = !bool;
    if(bool){
        oDianp[0].src = 'images/guang-dz-2.jpg';
        a += 1;
        oDiann[0].innerHTML = a;
    } else{
        oDianp[0].src = 'images/guang-dz.jpg';
        a = 24;
        oDiann[0].innerHTML = a;
    }
    
}
oDianp[1].onclick = function(){
    let a = 33;
    bool = !bool;
    if(bool){
        oDianp[1].src = 'images/guang-dz-2.jpg';
        a += 1;
        oDiann[1].innerHTML = a;
    } else{
        oDianp[1].src = 'images/guang-dz.jpg';
        a = 33;
        oDiann[1].innerHTML = a;
    }
    
}













