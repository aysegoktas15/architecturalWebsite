function openNav() {
    document.getElementById("sidebar").style.width = "240px";
    document.getElementById("main").style.marginLeft = "240px";
    document.getElementById("menuBtn").style.display = "none"
    document.getElementById("logoBtn").style.display = "none"
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menuBtn").style.display = "block";
    document.getElementById("logoBtn").style.display = "block";
}
