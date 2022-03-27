function fun1(){
    let x = document.getElementById("flags").value;
    let y = document.getElementById("flags").name;
    document.getElementById("image").src = x;
    document.getElementById("image").alt = y;
}