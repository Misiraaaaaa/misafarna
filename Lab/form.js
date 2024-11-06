function formvalidation(){
    var uname=document.form1.username.value;
    var password1=document.form1.password1.value;
    var password2=document.form1.password2.value;
    
    if(uname==null||uname==""){
        document.getElementById('span1').innerHTML="username cant be empty";
    }
    else if(password1==null||password1==""){
        document.getElementById('span2').innerHTML="password cant be empty";
    }
    else if(password1.length<8){
        document.getElementById('span2').innerHTML="password must be atleast 8 charachters";
    }
    else if(password1==password2){
        return true;
    }
    else{
        document.getElementById('span3').innerHTML="passwords dont match";
    }
    
}