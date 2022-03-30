'use strict';
let display_name,
lat,
lon;

async function getData(){
  const responce= await fetch('https://eu1.locationiq.com/v1/search.php?key=pk.bce4efd55c2fee98ea758880f0582c8b&q=amman&format=json');
  const data=await responce.json();
  display_name=data[0].display_name;
  lat = data[0].lat;
  lon = data[0].lon;
  icon=data[0].icon;
  
document.getElementById("display_name").textContent=display_name;
document.getElementById("lat").textContent=lat;
document.getElementById("lon").textContent=lon;
document.getElementById("icon").src=icon;


}
getData();
