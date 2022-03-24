let x = document.createElement("div");

x.style = "border: 1px solid black; background-color: blue;  width: 100px; padding:100px";

document.body.appendChild(x);

let y = 0;

x.onclick = function(){

    if(y >= 3){
        y = 0;
    }

    switch(y){
        case 0:
            x.style.backgroundColor = "red";
        break;

        case 1:
            x.style.backgroundColor = "green";
        break;

        case 2:
            x.style.backgroundColor = "blue";
        break;    
    }
    
    y++;
}