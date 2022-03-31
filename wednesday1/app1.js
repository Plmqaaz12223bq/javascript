'use strict';
let form = document.getElementById("form")
let firstname ;
let lastname; 
let birthdate ; 
let email1;
let email2;
let password1;
let password2;

function checkforregistration()
{


  firstname = document.getElementById("firstname").value; 
   lastname = document.getElementById("lastname").value; 
   birthdate = document.getElementById("birthdate").value; 
   email1 = document.getElementById("email").value; 
   email2 = document.getElementById("confirmemail").value; 
   password1 = document.getElementById("password").value; 
   password2 = document.getElementById("confirmpassword").value; 
   
   let checkname = /[0-9 |!"£%^&*(_) %]/gim
    let firstnamecheck = firstname.search(checkname);
if(firstnamecheck >= 0)
   {
    bodydivs[0].innerHTML = "Name not allowed"
    
    bodydivs[0].style.display = "block"
}
else
{
 bodydiv[0].innerHTML = ""
 bodydiv[0].style.display = "none"
}
 let lastnamecheck = lastname.search(checkname);
   if(lastnamecheck >=0)
   {
    bodydiv[1].innerHTML = "Name not allowed"
    bodydiv[1].style.display = "block"
    
   }
   else
   {
    bodydiv[1].innerHTML = ""
    bodydiv[1].style.display = "none"
   }
 let date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
if (!(date_regex.test(birthdate))) {
    bodydiv[2].innerHTML = "birthdate"
    bodydiv[2].style.display = "block"
      
   }
   else
   {
    bodydiv[2].innerHTML = ""
    bodydiv[2].style.display = "none"
   }

 let checkemail= /\S+@\S+\.\S+/

   if(!checkemail.test(email1))
   {
       bodydiv[3].innerHTML = "email context"
       bodydiv[3].style.display = "block"
       
       
   }
   else
   {
    bodydiv[3].innerHTML = ""
    bodydiv[3].style.display = "none"
   }
   if(email2 != email1)
   {
    bodydiv[4].innerHTML = "Emails do not match"
    bodydiv[4].style.display = "block"
    
    
}
else
{
 bodydiv[4].innerHTML = ""
 bodydiv[4].style.display = "none"
}
let check = /^[A-Z]/m
let checkpassword = password1.search(check)

if(checkpassword !=0  )
{
    
    bodydiv[5].innerHTML = "First letter should be capital "
    bodydiv[5].style.display = "block"
}
else
{
 bodydiv[5].innerHTML = ""
 bodydiv[5].style.display = "none"
}
let numberscheck = /[0-9]/g
let passwordnumbercheck = [0];

 passwordnumbercheck += password1.match(numberscheck)
if( passwordnumbercheck.length < 4 || passwordnumbercheck.length ==5)
{
 bodydiv[5].innerHTML +=  "pass"
}
let symcheck = /[!"£$%^&*()_+=-]/g
let passwordsymcheck = password1.search(symcheck)
if(passwordsymcheck != 0)
{
    bodydiv[5].innerHTML +=  "need at least one symbol"
}

if(password2 != password1)
{
    bodydiv[6].innerHTML = "passwords do not match"
    bodydiv[6].style.display = "block"
    
    
}
else
{
 bodydiv[6].innerHTML = ""
 bodydiv[6].style.display = "none"
}






}
setInterval(() => {
   
   checkforregistration()

}, 200);

regform.addEventListener("submit",toformdata)
function toformdata(event)
{
    event.preventDefault();
document.getElementById("demo2").innerHTML = firstname +" " +  lastname;
dataarr.push(firstname)
dataarr.push(lastname)
let namestr = JSON.stringify(dataarr)
localStorage.setItem("data",namestr)

    
}


    
