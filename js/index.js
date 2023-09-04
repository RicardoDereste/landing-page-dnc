var leftArrow = window.document.getElementById("left-arrow")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var rightArrow = window.document.getElementById("right-arrow")

function moveToRight() {
    leonardo.style="display:none"
    bruna.style="display:flex"
    leftArrow.style="display:flex"
    rightArrow.style="display:none"
}

function moveToLeft() {
    leonardo.style="display:flex"
    bruna.style="display:none"
    leftArrow.style="display:none"
    rightArrow.style="display:flex"
}