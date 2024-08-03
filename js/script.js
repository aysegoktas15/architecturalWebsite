function openNav() {
    document.getElementById("sidebar").style.width = "220px";
    document.getElementById("main").style.marginLeft = "220px";
    document.getElementById("menuBtn").style.display = "none"
    document.getElementById("logoBtn").style.display = "none"
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menuBtn").style.display = "block";
    document.getElementById("logoBtn").style.display = "block";
}
