'use strict';

let firstName=document.getElementById('fname');
let nameError=document.getElementById('fname-error');
let lastName=document.getElementById('lname');
let lastNameError=document.getElementById('sname-error');
let regFormx=document.getElementById('regs_form');
let birthdateError=document.getElementById('bdate-error');
let emailError=document.getElementById('email-error');
let passwordError=document.getElementById('password-error');
let info=[];

/*LocalStorage */
function LocalStorageFrom(){
    let array=JSON.stringify(info);
    localStorage.setItem('formData',array);
}

/*Regestration Constructor */
function regForm(fname,lname,bdate,femail,semail,password,spassword){

this.fname=fname;
this.lname=lname;
this.femail=femail;
this.semail=semail;
this.bdate=bdate;
this.password=password;
this.spassword=spassword;
this.fullName=userName(this.fname,this.lname);
this.correctDate=checkDate(this.bdate);
this.correctEmail=correctEmail(this.femail,this.semail);
this.correctPssword=checkPassword(this.password,this.spassword);
console.log(this.fullName);
info.push(this);
renderInfo();
LocalStorageFrom()
}

/*To return the full name */
function userName(fname,lname){
    let x;
    let regex = /[a-zA-Z\s]+$/;
    if ((regex.test(fname)) && (regex.test(lname))){
        console.log('correct');
        x = fname + ' '+ lname;
        return x;
    }
    else{
        nameError.innerHTML='Incorrect name'
        return 'Incorrect name';
    }
}

/*To check from the date */
function checkDate(date)
{
 let regex=/(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
 if(regex.test(date)){
     console.log('correct date');
     return date;
 }
 else{
     console.log('inncorrect date');
     emailError.innerHTML='inncorrect date';
 }
}

/*To check from the email */
function correctEmail(femail,semail){
    let regex=/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if ((!regex.test(femail)) && (!regex.test(semail)))
    {
      emailError.innerHTML= 'Incorrect Email!';
      return  'Incorrect Email!';
    }
    else{
        if (femail==semail){
             console.log('Email has been confirmed');
             emailError.innerHTML='Email has been confirmed';
             return 'Email has been confirmed';
        }
        else{
            console.log(`Emails don't match`);
            emailError.innerHTML=`Emails don't match`;
            return `Emails don't match`;
        }
    }   
  }

/*To check from password */
function checkPassword(password,spassword){
    let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=(.*[\d]){2,})[A-Za-z\d?]{8,32}$/;
    let num=/[\d]{2,}/;
    let capital=/[A-Z]/;
    let symboles=/[#$@!%&*?]/;
    if ((regex.test(password))&& (regex.test(spassword))){ //To check from 2 passwords syntax
        console.log('password syntax is Incorrect');
        passwordError.innerHTML= 'password syntax is Incorrect';
        
    }
    else if((!capital.test(password[0])) && (!capital.test(spassword[0]))){ //To check from the first letter
        console.log( 'Incorrect! first name must be capital.');
        passwordError.innerHTML= 'Incorrect! first name must be capital.';
    }
    else if((!num.test(password))&&(!num.test(spassword))){
        console.log('You password must contain 2 numbers at least');
        passwordError.innerHTML= 'You password must contain 2 numbers at least';
    }
    else if((!symboles.test(password)) && !symboles.test(spassword)){
        console.log('You password must contain  at least 1 character');
        passwordError.innerHTML= 'You password must contain  at least 1 character';
    }
    else if((password===spassword) &&(password.length>=8 && password.length<=32) &&(spassword.length>=8 && spassword.length<=32)){
        console.log('password syntax is correct');
        console.log('The first name is capital');
        console.log( 'Passwords match');
    }else{
        console.log(`Passwords don't match or the length is more than 8 or less than 32`);
       passwordError.innerHTML= `Passwords don't match or the length is incorrect (length must be more or equal than 8 and less than or equal 32`;
    }
}
regFormx.addEventListener('submit', handelSubmit);
function handelSubmit(e){
    e.preventDefault();
    let fname=e.target.fname.value;
    let lname=e.target.lname.value;
    let bdate=e.target.bdate.value;
    let femail=e.target.femail.value;
    let semail=e.target.semail.value;
    let password=e.target.password.value;
    let spassword=e.target.spassword.value;
    new regForm(fname,lname,bdate,femail,semail,password,spassword); //Calling the constructor
}
handelSubmit();
function renderInfo(){
    
}