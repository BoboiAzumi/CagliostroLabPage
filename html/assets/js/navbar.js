let btn_1 = document.getElementById("btn_1")
let mobile_navbar = document.getElementById("mobile_navbar")
let btn_1_toggle = false
let btn_1_class = btn_1.getAttribute("class")
function toggle() {
    if (btn_1_toggle) {
        btn_1.setAttribute("class", btn_1_class)
        //mobile_navbar.style = "display:none"
        mobile_navbar.classList.toggle("translate-y-16")
        mobile_navbar.classList.toggle("translate-y-[-100rem]")
        btn_1_toggle = !btn_1_toggle
    } else {
        btn_1.setAttribute("class", btn_1_class + " rotate-90")
        //mobile_navbar.style = "display:flex"
        mobile_navbar.classList.toggle("translate-y-16")
        mobile_navbar.classList.toggle("translate-y-[-100rem]")
        btn_1_toggle = !btn_1_toggle
    }
}
btn_1.addEventListener("click", (e) => {
    toggle()
})
