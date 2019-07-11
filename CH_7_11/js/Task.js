window.onload = () => {
    var date = 0;
    var s="";//秒
    var m="";//分钟
    var h="";//小时
    var setinter=null;

    //开始和暂停
    document.getElementById("start").onclick = function () {
        var val=this.innerHTML;
        if(val=="开始"){
            this.innerHTML="暂停";
            setinter = setInterval(() => {
                date++;
                setDate(date);
                document.getElementById("date").innerHTML=h+":"+m+":"+s;
            }, 1000);
        }else{
            this.innerHTML="开始";
            clearInterval(setinter);
        }
    }

    //重置
    document.getElementById("reset").onclick=()=>{
        document.getElementById("date").innerHTML="00:00:00";
        date=0;
    };

    //将秒数改为格式化的时间
    function setDate(date){
        let H=Math.floor(date/3600);
        let M=Math.floor((date%3600)/60);
        let S=Math.floor((date%3600)%60);
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