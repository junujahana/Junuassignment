let email=document.getElementById("email");
let psw=document.getElementById("psw");
let pswd=document.getElementById("pswd");
let error=document.getElementById("error");
let phone=document.getElementById("phone");
let pherror=document.getElementById("pherror");
let pwerror=document.getElementById("pwerror");

function validation()
{
    if(psw.value.trim()=="" || pswd.value!=psw.value || psw.value.length <8 || pswd.value.length <8){
       // alert("Invalid password");
       pwerror.innerHTML="Invalid Password";
       pwerror.style.color="red";
        return false;
    }
    else {
        pwerror.innerHTML="valid Password";
       pwerror.style.color="green";
        return true;
    }
}

    

function mailvalidation()
{
    let regExp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/
    if(regExp.test(email.value))
    {
        error.innerHTML="Valid";
        error.style.color="green";
        return true;
    }
    else{
       error.innerHTML="Invalid";
       error.style.color="red";
        return false;
    }
}

function phonenumber()
{
  
  var phoneno1 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var phoneno2= /^([0-9]{3,3}) ([0-9]{3,3}) ([0-9]{4,4})$/;
  var phoneno3=/^([0-9]{10,10})$/;
    if(phone.value.match(phoneno1) || phone.value.match(phoneno2) || phone.value.match(phoneno3))
    {
    return true;
    }
    else
     {
        //alert("Not a valid Phone Number");
        pherror.innerHTML="Invalid";
        pherror.style.color="red";
        return false;
    }
}

function strength()
{
if(psw.value.length<8)
{
    pwerror.innerHTML="Password requires a min. of 8 characters";
    pwerror.style.color="red"; 
    return false;
}
else if(psw.value.length<=11 && psw.value.length>=8)
{
    pwerror.innerHTML="Password Strength: Poor";
    pwerror.style.color="red"; 
    return true;
    
}
else if(psw.value.length<=14)
{
    pwerror.innerHTML="Password Strength: Medium";
    pwerror.style.color="orange";
    return true; 
   
}
else
{
    pwerror.innerHTML="Password Strength: Strong";
    pwerror.style.color="Green";
    return true; 
    
}
}



function validi(){
    if(validation() && mailvalidation() && phonenumber() && strength())
    {
        return true;
    }
    else
    {
        return false;
    }
}