document.body.style.height = "10000px";
//dodawanie elementu do strony
const newDiv = document.createElement('div')
document.body.appendChild(newDiv);

newDiv.style.position = "fixed";
newDiv.style.width = "100%";
newDiv.style.height = "50vh";
newDiv.style.left = "0";
newDiv.style.top = "0";

//zmienne do sterowania
let grow = true;
let count = 0;

const changeHeight = function () {
    newDiv.style.height = count + "px";
    if (count < window.innerHeight / 2 && grow) {
        newDiv.style.backgroundColor = "green";
        count += 10;
    } else {
        count -= 10;
        newDiv.style.backgroundColor = "red";
        grow = false;
        if (count <= 0) grow = true;
    }
}

window.addEventListener("scroll", changeHeight);