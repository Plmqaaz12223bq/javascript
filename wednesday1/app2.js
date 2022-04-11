'use strict';
let result=document.getElementById('result');

function GetDataFromLovalStorage(){
    let storageData=localStorage.getItem('formData');
    let parseData=JSON.parse(storageData);
    console.log(parseData);
    renderInformation(parseData)
}
GetDataFromLovalStorage()

function renderInformation(parseData){
    parseData.map(function(i){
        let newSpan=document.createElement('span');
        result.appendChild(newSpan);
        newSpan.innerHTML= `Hello! This is ${i.fullName}, I was born on ${i.bdate} and my email is: ${i.femail}`;
    })
}