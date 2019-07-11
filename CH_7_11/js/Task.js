window.onload = () => {
    var date = 61;
    var redate = 0;
    var s="";//秒
    var m="";//分钟
    var h="";//小时
    document.getElementById("start").onclick = function () {
        var setinter = setInterval(() => {
            date+=1;
            setDate(date);
            document.getElementById("date").innerHTML=redate;//h+":"+m+":"+s;
        }, 1000);
    }

    function setDate(date){
        var S=0;
        var M=0;
        var H=0;

        Math.round(date/3600);
        //小时
        if(Math.round(date/3600)<1){
            h="00";
        }else if(Math.round(date/3600)<10&&Math.round(date/3600)>1){
            h="0"+Math.round(date/3600);
        }else{
            h=Math.round(date/3600);
        }
        //分钟
        if(Math.round(date/60)<1){
            h="00";
        }else if(Math.round(date/60)<10&&Math.round(date/60)>1){
            h="0"+Math.round(date/60);
        }else{
            h=Math.round(date/60);
        }
        //秒
        if(Math.round(date/60)<1){
            h="00";
        }else if(Math.round(date/60)<10&&Math.round(date/60)>1){
            h="0"+Math.round(date/60);
        }else{
            h=Math.round(date/60);
        }

    }
}