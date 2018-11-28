var oSpan = document.getElementsByTagName("span");
var oLi = document.getElementsByClassName("li-1");
for(let i = 0; i<oSpan.length; i++){
    oSpan[i].onclick = function(){
        for(let j = 0; j<oSpan.length; j++ ){
            oSpan[j].className = "";

            console.log(j);
        }
        oSpan[i].className = "co";
        
        console.log(i);
    }
};
for(let i = 0; i<oLi.length; i++){
    oLi[i].onclick = function(){
        for(let j = 0; j<oLi.length; j++ ){
            oLi[j].className = "li-1";

            console.log(j);
        }
        oLi[i].className = "wh li-1";
        console.log(i);
    }
};


