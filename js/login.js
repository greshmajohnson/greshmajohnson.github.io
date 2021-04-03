function validate(){
    let email=document.getElementById("email");
    let error_email=document.getElementById("error_email");

    let pwd=document.getElementById("pwd");
    let error_pwd=document.getElementById("error_pwd");

    let regexp_email=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    // let regexp_email=/^(([\.-\s@"]+(\.[\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3}))$/;

    // let regexp_pwd=/^([A-Za-z0-9]+){8,}$/;
    let regexp_pwd=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

    if(email_valid(email)){
        if(pwd_valid(pwd)){
            return true;
        }
    }
    function email_valid(){
        if(email.value==""){
            alert("The email field cannot be empty!");
            error_email.innerHTML="";
            email.focus();
            return false;
        }else{
            if(regexp_email.test(email.value)){
                error_email.innerHTML="Valid &#10004";
                error_email.style.fontFamily="serif";
                error_email.style.fontWeight="bolder";
                error_email.style.color="green";
                return true;
            }
            else{
                error_email.innerHTML="Please enter the valid email &#10006";
                error_email.style.fontFamily="serif";
                error_email.style.fontWeight="bolder";
                error_email.style.color="red";
                return false;
            }
        }
        
    }

    function pwd_valid(){
        if(pwd.value==""){
            alert("The password field cannot be empty!");
            error_pwd.innerHTML="";
            pwd.focus();
            return false;
        }else{
            if(regexp_pwd.test(pwd.value)){
                error_pwd.innerHTML="Valid &#10004";
                error_pwd.style.fontFamily="serif";
                error_pwd.style.fontWeight="bolder";
                error_pwd.style.color="green";
                return true;
            }
            else{
                error_pwd.innerHTML="Please enter the valid password &#10006";
                error_pwd.style.fontFamily="serif";
                error_pwd.style.fontWeight="bolder";
                error_pwd.style.color="red";
                return false;
            }
        }
        
    }
 
        return false;
  
}