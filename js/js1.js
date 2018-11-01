var oLi = document.getElementById("nav-ul").getElementsByTagName("li");
for(let i=0; i<oLi.length+1; i++){
  oLi[i].onmouseover = function(){   
    for(let j =0 ;j<oLi.length; j++){
            oLi[j].getElementsByTagName('a')[0].className  = '';
        }
         oLi[i].getElementsByTagName('a')[0].className  = 'a';
    }   
}


















