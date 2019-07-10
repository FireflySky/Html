window.onload=function(){
    var td=document.getElementsByTagName("td");
   for(var i=0;i<td.length;i++){
        td[i].onclick=function(){
            alert(this.innerHTML);
        };
   } 
}