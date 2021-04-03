function validate(){

let email=document.getElementById("email");
let pwd1=document.getElementById("pwd1");
let pwd2=document.getElementById("pwd2");
let phone=document.getElementById("phone");
let fname=document.getElementById("fname");
let pwd_strength=document.getElementById("pwd_strength");
let phone_inst=document.getElementById("phone_inst");


const strong = document.querySelector(".strong");
const indicator = document.querySelector(".indicator");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
var testCheckbox = document.getElementById("MyCheckbox");  

let error_email=document.getElementById("error_email");
// let error_pwd1=document.getElementById("error_pwd1");
let error_pwd2=document.getElementById("error_pwd2");
let error_phone=document.getElementById("error_phone");
let strength=document.getElementById("strength");

// let regexp_pwd1_strong=/^([A-Za-z0-9]+){8,}$/;
let regexp_pwd1_strong=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
// let regexp_pwd1_strong=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// let regexp_pwd1_medium=/^([A-Za-z]+)|([A-Z0-9]+)|([a-z0-9]+){6,}$/;
let regexp_email=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
// let regexp_pwd1_strong=/^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$/;
let regexp_pwd1_medium=/^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$/;

// let regexp_phone=/^([0-9]+)[10]|([0-9]+)-([0-9]+)-([0-9]+){10}|([0-9]+).([0-9]+).([0-9]+){10}|([0-9]+) ([0-9]+) ([0-9]+){10}&/;
// let regexp_phone=/^(\d{1,3}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}|([0-9]+){10}$/;
let regexp_phone=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
// let regexp_phone=/^(\\d{3}[- .]?){2}\\d{4}$/;
// let regexp_phone=/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;

if (fname_valid(fname)){
    if(phone_valid(phone)){
        if(email_valid(email)){
            if(pwd1_valid(pwd1)){
                if(matchpass(pwd1,pwd2)){
                    if (checkCheckBoxes(testCheckbox)){
                       return true;
                   }
                }
            }
        }
    }

}


function fname_valid(){
    if(fname.value==""){
        alert("The first name field cannot be empty!");
        fname.focus();
        return false;
    }
    else{
        return true;
    }
}

function phone_valid(){
    if(phone.value==""){
        alert("The phone number field cannot be empty!");
        phone.focus();
        phone_inst.innerHTML="";
        error_phone.innerHTML="";
        return false;
    }
    else{
        if(regexp_phone.test(phone.value)){
            error_phone.innerHTML="Valid &#10004";
            error_phone.style.fontFamily="serif";
            error_phone.style.fontWeight="bolder";
            error_phone.style.color="green";
            phone_inst.innerHTML="";
            return true;
        }
        else{
            error_phone.innerHTML="Please enter a valid phone number &#10006";
            error_phone.style.fontFamily="serif";
            error_phone.style.fontWeight="bolder";
            error_phone.style.color="red";
            phone.focus();
            phone_inst.innerHTML="Phone number should be any one of the formats: XXXXXXXXXX, XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX";
            return false;
        }
    }
    
}

function email_valid(){
    if(email.value==""){
        alert("The email field cannot be empty!");
        error_email.innerHTML="";
        email.focus();
        return false;
    }
    else{
        if(regexp_email.test(email.value)){
            error_email.innerHTML="Valid &#10004";
            error_email.style.fontFamily="serif";
            error_email.style.fontWeight="bolder";
            error_email.style.color="green";
            return true;
        }
        else {
            error_email.innerHTML="Please enter a valid email &#10006";
            error_email.style.fontFamily="serif";
            error_email.style.fontWeight="bolder";
            error_email.style.color="red";
            email.focus();
            return false;
        }
    }
}


    
function pwd1_valid(){

    if(pwd1.value==""){
        alert("The password field cannot be empty!");
        indicator.style.display = "none";
        pwd_strength.innerHTML="";
        strength.innerHTML="";
        pwd1.style.borderBottom="";
        pwd1.focus();
        return false;
    }
    else{
        indicator.style.display = "block";
          indicator.style.display = "flex";
        if(regexp_pwd1_strong.test(pwd1.value)){
            no=3;
            pwd_strength.innerHTML="Password Stength:";
            strength.innerHTML="Strong &#128522";
            strength.style.fontFamily="serif";
            strength.style.fontWeight="bolder";
            strength.style.color="green";
            pwd1.style.borderBottom="3px green solid";
            if(no==3){
                weak.classList.add("active");
                medium.classList.add("active");
                strong.classList.add("active");
              }
             
            return true;
        }
        else if(regexp_pwd1_medium.test(pwd1.value)){
            no=2;
            pwd_strength.innerHTML="Password Stength:";
            strength.innerHTML="Medium &#128528";
            strength.style.fontFamily="serif";
            strength.style.fontWeight="bolder";
            strength.style.color="Orange";
            pwd1.style.borderBottom="3px orange solid";
            pwd1.focus();
            if(no==2){
                medium.classList.add("active");
                weak.classList.add("active");
                strong.classList.remove("active");
              }
              else{
                medium.classList.remove("active");
               
              }
            return false;
        }
        else{
            strength.innerHTML="Poor &#128542";
            no=1;
            pwd1.focus();
            pwd_strength.innerHTML="Password Stength:";
            strength.style.fontFamily="serif";
            strength.style.fontWeight="bolder";
            strength.style.color="red";
            pwd1.style.borderBottom="3px red solid";
            if(no==1){
                weak.classList.add("active");
                medium.classList.remove("active");
                strong.classList.remove("active");
              }
              else{
                strong.classList.remove("active");
                
              }
            return false;
        }
    }
}

function matchpass(){
    if(pwd2.value==""){
        alert("Please enter the password again");
        error_pwd2.innerHTML="";
        pwd2.focus();
        return false;
    }
    else{
        if(pwd1.value==pwd2.value){
            error_pwd2.innerHTML="Passwords match &#10004";
            error_pwd2.style.fontFamily="serif";
            error_pwd2.style.fontWeight="bolder";
            error_pwd2.style.color="green";
            return true;
        }
        else{
            error_pwd2.innerHTML="Password didn't match.Please try again. &#10006";
            error_pwd2.style.color="red";
            error_pwd2.style.fontFamily="serif";
            error_pwd2.style.fontWeight="bolder";
            pwd2.focus();
            return false;
        }
    }
    
}

function checkCheckBoxes() {
if (!testCheckbox.checked) {
    alert("You must agree to the terms first.");
    testCheckbox.focus();
    return false;
  }
  else {
    alert("Success Message!!");
    return true;
  }
}


return false;

}
