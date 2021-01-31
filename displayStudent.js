function displayStudent() {
    var personalNumberBox = document.getElementById("personal-number");

    if (personalNumberBox.style.display == "block") {
        personalNumberBox.style.display = "none";
    } else {
        personalNumberBox.style.display = "block";
    }
}