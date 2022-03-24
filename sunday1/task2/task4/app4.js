let x=prompt("num1");
let y=prompt("num2");
let z=prompt("num3");

let x_num=Number(x);
let y_num=Number(y);
let z_num=Number(z);

if ((x_num%3==0)||(y_num%3==0)||(z_num%3==0)){
    console.log("fizz");
    document.write("fizz"+"<br>");

}
else{
    console.log("");
}
if ((x_num%5==0)||(y_num%5==0)||(z_num%5==0)){
    console.log("buzz");
    document.write("buzz"+"<br>");
}
if ((x_num%3==0 && x_num%5==0)||(y_num%3==0 && y_num%5==0)||(z_num%3==0 && z_num%5==0)){
    console.log("fizz buzz");
    document.write("fizz buzz"+"<br>");
}