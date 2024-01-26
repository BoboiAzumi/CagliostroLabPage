let change = document.getElementsByClassName("change")

let imageUrl = [
    "./assets/img/1.webp",
    "./assets/img/2.webp",
    "./assets/img/3.webp",
    "./assets/img/4.webp",
    "./assets/img/5.webp",
    "./assets/img/6.webp",
    "./assets/img/7.webp",
    "./assets/img/8.webp",
]
let image = []
let thisIndex = 0
let loaded = 0
let isStartLoad = true
let bannerShow = document.getElementById("banner")
let loadedtxt = document.getElementById("loaded")

function next() {
    if (thisIndex >= image.length) {
        thisIndex = 0
    }
    if (isStartLoad) {
        change[0].setAttribute("src", image[thisIndex])
        change[0].classList.remove("opacity-0")
        change[0].classList.add("opacity-100")
        isStartLoad = false
        thisIndex += 1
        setTimeout(function () {
            next()
        }, 5000)
        return
    }
    if (thisIndex === 0 && !isStartLoad) {
        change[0].classList.remove("opacity-100")
        change[0].classList.add("opacity-0")
        bannerShow.classList.remove("hidden")
        setTimeout(function () {
            bannerShow.classList.add("hidden")
            change[0].setAttribute("src", image[thisIndex])
            change[0].classList.remove("opacity-0")
            change[0].classList.add("opacity-100")
            thisIndex += 1
            setTimeout(function () {
                next()
            }, 5000)
        }, 2000)
        return
    }

    change[0].classList.remove("opacity-100")
    change[0].classList.add("opacity-0")
    bannerShow.classList.remove("hidden")
    setTimeout(function () {
        bannerShow.classList.add("hidden")
        change[0].setAttribute("src", image[thisIndex])
        change[0].classList.remove("opacity-0")
        change[0].classList.add("opacity-100")

        thisIndex += 1

        setTimeout(function () {
            next()
        }, 5000)
    }, 2000)
}

async function loadImage() {
    fetch(imageUrl[loaded])
        .then((x) => x.blob())
        .then((y) => {
            let FS = new FileReader()

            FS.onload = () => {
                image.push(FS.result)
                loaded++
                loadedtxt.innerHTML = loaded + 1 + "/" + imageUrl.length
                if (loaded === imageUrl.length - 1) {
                    next()
                    document.getElementById("loading").classList.add("hidden")
                    document
                        .getElementById("content")
                        .classList.remove("hidden")
                } else {
                    setTimeout(() => loadImage(), 100)
                }
            }

            FS.readAsDataURL(y)
        })
}

loadImage()
