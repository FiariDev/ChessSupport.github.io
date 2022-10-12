function Cover() {
    document.getElementById("Cover").style.opacity = '0';
    var c = document.getElementById("Cover")
    setTimeout(dlt,500);
    function dlt() {
        c.parentNode.removeChild(c)
    }
}