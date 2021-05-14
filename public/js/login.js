let username=document.getElementById("username");
let pwd=document.getElementById("pwd");

function validate()
{   
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(username.value.trim()==""||pwd.value.trim()==""||pwd.value.length<8||!pwd.value.match(passw)){
        alert("username or password is invalid");
        return false;
    }
    else{

        return true;
    } 

}
