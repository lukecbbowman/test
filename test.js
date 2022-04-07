var username=[];
var password=[];
document.getElementById("ghost").style.visibility = "hidden";
document.getElementById("success").style.display="none";
var test="test";

function addUser(){
    var userHold=document.getElementById("username").value;
    var passHold=document.getElementById("password").value;
    if (username.includes(userHold)==true){
        document.getElementById("ah").innerHTML="Sorry that username is already in use";
    } else {
        username.push(userHold);
        password.push(passHold);
        document.getElementById("ah").innerHTML="";
        document.getElementById("ghost").style.visibility="visible";
        document.getElementById("ghost2").style.display="none";
    }
}


function checkUser(){
    var check=document.getElementById("username2").value;
    var check2=document.getElementById("password2").value;
    if (username.includes(check)==true){
        if (password.includes(check2)==true){
            check=username.indexOf(check);
            if (password.indexOf(check2)==check){
                document.getElementById("ahh").innerHTML="Success!";
                document.getElementById("ghost").style.display="none";
                document.getElementById("success").style.display="block";
            } else {
                document.getElementById("ahh").innerHTML="Sorry the username and password do not match 1";
            }
        } else {
            document.getElementById("ahh").innerHTML="Sorry the username and password do not match 2";
        }
    } else {
        document.getElementById("ahh").innerHTML="Sorry that username doesn't exist 3";
    }
}
