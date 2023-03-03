
function validateName(){
    
    let nameError = document.getElementById('nameError');
    let name = document.getElementById('name');

    if(name.value.trim()=='')
    {
        nameError.innerHTML='Error!'
        return false;
        
    }
    else if (name.value.length < 5){
        nameError.innerHTML='User name must be 5 character'
        return false;
    }
    else{
        nameError.innerHTML=''
        return true;
    }
}

function validateEmail(){

    let email = document.getElementById('email')
    let emailError= document.getElementById('emailError')
    let regEx= /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/

    if(email.value.trim()=='')
    {
        emailError.innerHTML='Error!'
        return false;
    }
    else if( ! email.value.match(regEx))
    {
        emailError.innerHTML='invalid format'
        return false;
    }
    else{
        emailError.innerHTML=''
        return true;
    }
}
function validatePassword(){
    let password= document.getElementById('password');
    let passwordError= document.getElementById('passwordError')
    let pRedEx=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/

    if(password.value.trim()=='')
    {
        passwordError.innerHTML='Error!'
        return false;
    }
    else if( !password.value.match(pRedEx))
    {
        passwordError.innerHTML='minimun 5 to 20 character'
        return false;
    }
    else
    {
        passwordError.innerHTML=""
        return true;   
    }
}
function checkBox(){
    let check = document.getElementById('password')

    if(check.type === password)
    {
        check.type='text'
    }
    else{
        check.type='password'
    }
}
function validateRepeat()
{
    let repeat = document.getElementById('repeat')
    let repeatError = document.getElementById('repeatError')

    if(repeat.value.trim()=='')
    {
        repeatError.innerHTML='Error!'
        return false;
    }
    else if( repeat.value != password.value)
    {
        console.log('error')
        repeatError.innerHTML='Incorrect password'
        return false;
    }
    else {
        repeatError.innerHTML=''
        return true;
    }

}
function validateSubmittion()
{
    let submit = document.getElementById('submit') 

    if( !validateName() || !validateEmail() || !validatePassword() || !validateRepeat() )
    {
        submit.innerHTML='clean Errors!'
      return false;
    }
    else{
        submit.innerHTML=''
        return true;
    }
}
