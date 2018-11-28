var oSmall = document.getElementsByClassName('small-p');
var oPrice = document.getElementsByClassName('red');
var oShow = document.getElementsByClassName('show')[0];
var oShow1 = document.getElementsByClassName('show1');
var bool = false;
var bool1 = false;
var bool2 = false;
let sum = 0;
oSmall[0].onclick= function(){
    bool = !bool;
    if(bool){
         oSmall[0].src = 'images/shopping-4.jpg';
         sum +=  parseInt(oPrice[0].innerText.slice(1));
         oShow.innerHTML = '￥'+sum;
         oShow1[0].innerHTML = '￥'+sum;
         oShow1[1].innerHTML = '￥'+sum;
    }else{
        oSmall[0].src = ' images/shopping-3.jpg';
        sum -=  parseInt(oPrice[0].innerText.slice(1));
        oShow.innerHTML = '￥'+sum;
        oShow1[0].innerHTML = '￥'+sum;
        oShow1[1].innerHTML = '￥'+sum;
    }
}
oSmall[1].onclick= function(){
    bool1 = !bool1;
    if(bool1){
         oSmall[1].src = 'images/shopping-4.jpg';
         sum +=  parseInt(oPrice[1].innerText.slice(1));
         oShow.innerHTML = '￥'+sum;
         oShow1[0].innerHTML = '￥'+sum;
         oShow1[1].innerHTML = '￥'+sum;
    }else{
        oSmall[1].src = ' images/shopping-3.jpg';
        sum -=  parseInt(oPrice[0].innerText.slice(1));
        oShow.innerHTML = '￥'+sum;
        oShow1[0].innerHTML = '￥'+sum;
        oShow1[1].innerHTML = '￥'+sum;
    }
}
oSmall[2].onclick= function(){
    bool2 = !bool2;
    if(bool2){
        oSmall[0].src = 'images/shopping-4.jpg';
         oSmall[1].src = 'images/shopping-4.jpg';
         oSmall[2].src = 'images/shopping-4.jpg';
         sum +=  parseInt(oPrice[0].innerText.slice(1));
         sum +=  parseInt(oPrice[1].innerText.slice(1));
         oShow.innerHTML = '￥'+sum;
         oShow1[0].innerHTML = '￥'+sum;
         oShow1[1].innerHTML = '￥'+sum;
    }else{
        oSmall[0].src = ' images/shopping-3.jpg';
        oSmall[1].src = ' images/shopping-3.jpg';
        oSmall[2].src = ' images/shopping-3.jpg';
        sum -=  parseInt(oPrice[0].innerText.slice(1));
        sum -=  parseInt(oPrice[0].innerText.slice(1));
        oShow.innerHTML = '￥'+sum;
        oShow1[0].innerHTML = '￥'+sum;
        oShow1[1].innerHTML = '￥'+sum;
    }
}

function bar(){

}






