window.onload = () => {
    var date = 61;
    var redate = 0;
    var s="";//秒
    var m="";//分钟
    var h="";//小时
    document.getElementById("start").onclick = function () {
        var setinter = setInterval(() => {
            date++;
            setDate(date);
            document.getElementById("date").innerHTML=h+":"+m+":"+s;
        }, 1000);
    }

    function setDate(date){
       
        let H=Math.round(date/3600);
        let  M=Math.round((date%3600)/60);
        let S=Math.round((date%3600)%60);
        //小时
        if(H<1){
            h="00";
        }else if(H<10){
            h="0"+H;
        }else{
            h=H;
        }
        //分钟
        if(M<1){
            m="00";
        }else if(M<10){
            m="0"+M;
        }else{
            m=M;
        }
        //秒
        if(S<1){
            s="00";
        }else if(S<10){
            s="0"+S;
        }else{
            s=S;
        }

    }
}