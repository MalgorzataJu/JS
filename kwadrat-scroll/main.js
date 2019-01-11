const squereDiv = document.createElement('div');
document.body.appendChild(squereDiv);
// squereDiv.style.width = "10px";
// squereDiv.style.height = "10px";

let scrollSize = 10;
let grow = true;

window.addEventListener("scroll", function () {
    console.log(scrollSize);

    squereDiv.style.width = scrollSize + "px";
    squereDiv.style.height = scrollSize + "px";
    if ((scrollSize < window.innerWidth * 0.5) && (scrollSize < window.innerHeight * 0.5) && grow) {
        scrollSize += 5;
    } else {
        scrollSize -= 5;
        grow = false;
        if (scrollSize < 0) grow = true;
    }
})