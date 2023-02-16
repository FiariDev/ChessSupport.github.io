function Cover() {
    document.getElementById("Cover").style.opacity = '0';
    var c = document.getElementById("Cover")
    setTimeout(dlt,500);
    function dlt() {
        c.parentNode.removeChild(c)
    }
}
function refreshhover() {
    document.getElementById("Refresh").style.backgroundColor = '#191818'
}
function refreshhover2() {
    document.getElementById("Refresh").style.backgroundColor = '#252321'
}
function playhover() {
    document.getElementById("PlayDimm").style.backgroundColor = '#191818'
}
function playhover2() {
    document.getElementById("PlayDimm").style.backgroundColor = '#252321'
}
function puzzlehover() {
    document.getElementById("PuzzleDimm").style.backgroundColor = '#191818'
}
function puzzlehover2() {
    document.getElementById("PuzzleDimm").style.backgroundColor = '#252321'
}
function ctrlr() {
    window.location.href = "Fiaridev.github.io"
}
function play() {
    window.location.href = "Play"
}
function puzzle() {
    window.location.href = "Puzzle"
}