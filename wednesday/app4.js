function changeFontFamily() {
    let text = document.getElementById("text");
    let z = document.getElementById("font_family");
    text.style.fontFamily = z.value;
}

function changeFontSize() {
    let text = document.getElementById("text");
    let x = document.getElementById("font_size");
    text.style.fontSize = x.value;
}

function changeFontItalic() {
    let text = document.getElementById("text");
    let i = document.getElementById("font_italic").checked;
    text.style.fontStyle = (i ? "italic" : "normal");
}

function changeFontBold() {
    let text = document.getElementById("text");
    let b = document.getElementById("font_bold").checked;
    text.style.fontWeight = (b ? "bold" : "normal");
}

function changeFontUnderline() {
    let text = document.getElementById("text");
    let u = document.getElementById("font_underline").checked;
    text.style.textDecoration = (u ? "underline" : "none");
}
