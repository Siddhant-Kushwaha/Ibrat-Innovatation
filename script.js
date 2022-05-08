// Created by - Siddhant Kushwaha
// The logic here is to increase the width of the image box which is hovered upon and decrease the width of the remaining image boxes
// with the help of overlay added

let images = document.querySelectorAll(".overlay")

console.log(images)
for (let i of images) {
    i.addEventListener("mouseenter", function (e) {
        for (let j of images) {
            j.parentNode.style.width = "25%"
        }
        e.target.parentNode.style.width = "50%"
    })
}
