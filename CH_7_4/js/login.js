window.onload=function(){
    document.getElementById("login").onclick=function(e){
        var name=document.getElementById("name").value;
        var pwd=document.getElementById("pwd").value;
        if(name=="admin"&&pwd==1234){
            alert("登录中...");
        }else{
            alert("用户名或密码有误"+name+"::"+pwd);
        }
    };

}