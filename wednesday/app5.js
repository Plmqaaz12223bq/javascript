function checkPasswords() {
    let pw1 = document.getElementById("password1").value;
    let pw2 = document.getElementById("password2").value;
    let pw1check = document.getElementById("pw1_check");
    let pw2check = document.getElementById("pw2_check");

    let isError = false;
    if (pw1.length > 0) {
        if (pw1.length < 6) {
            pw1check.innerHTML = "Too short";
            isError = true;
        }
        else {
            pw1check.innerHTML = "";
        }
        if (pw2.length > 0 && pw1 !== pw2) {
            pw2check.innerHTML = "the two passwords don't match";
            isError = true;
        }
        else {
            pw2check.innerHTML = "";
        }
    }
    else {
        pw1check.innerHTML = "";
    }

    let btn = document.getElementById("submitBtn");
    if (pw1.length > 0 && pw2.length > 0 && !isError) {
        btn.style.display = "";
    }
    else {
        btn.style.display = "none";
    }
}

