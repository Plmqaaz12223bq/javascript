'use strict'
let formDiv= document.getElementById("mobForm");
let thElement=document.getElementById("headTa")
let tbElement=document.getElementById("boadTa");
let userfor=[];
function phone(useName,typeNameD){
    this.useName=useName;
    this.typeNameD=typeNameD;
    this.price=priceMob(50,500);
    this.cond=conditon();
      

    userfor.push(this);
    renderType();
    console.log(userfor);
}
function priceMob(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

function conditon() {
    let price=phone.price;
    if (price <= 50) {
        return 'used';
    } 
    else {
        return 'new Device';
    }
}
formDiv.addEventListener("submit",handleSubmit);
 function handleSubmit(event){
    event.preventDefault();
    
    let useName=event.target.useName.value;
    
    
    let typeNameD=event.target.typeNameD.value;
    

    new phone(useName,typeNameD);
    console.log(phone);

 }
 handleSubmit();
 function renderType() {
    let trElement = document.createElement("tr");
    let tdElement4 = document.createElement("td");
    let tdElement1 = document.createElement("td");
    let tdElement2 = document.createElement("td");
    let tdElement3 = document.createElement("td");
  
    for (let i = 0; i < userfor.length; i++) {
      tbElement.appendChild(trElement);
      trElement.appendChild(tdElement4);
      trElement.appendChild(tdElement1);
      trElement.appendChild(tdElement2);
      trElement.appendChild(tdElement3);
  
      tdElement4.textContent = userfor[i].useName;
      tdElement1.textContent = userfor[i].typeNameD;
      tdElement2.textContent = userfor[i].price;
      tdElement3.textContent = userfor[i].cond;
    }
}



