function changeImage() {
    let s = document.getElementById("country");
    let img = document.getElementById("img");
    img.src = "images/" + s.options[s.selectedIndex].value;
    img.alt = s.options[s.selectedIndex].text;
}