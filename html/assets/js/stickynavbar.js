let navbar = document.getElementById("navbar")
window.onscroll = function () {
    navbarsticky()
}

function navbarsticky() {
    if (window.pageYOffset > navbar.offsetTop) {
        navbar.classList.add("fixed")
    } else {
        navbar.classList.remove("fixed")
    }
}
