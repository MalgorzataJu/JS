const btn = document.querySelector("button");
const list = document.querySelectorAll("li");
let size = 10;
let first = true;

btn.addEventListener("click", function () {

    if (first) {
        // for (let i = 0; i < 10; i++) {
        //     list[i].style.display = "block";
        //     list[i].style.fontSize = size + "px";
        //     first = false;
        // }
        list.forEach(x => {
            x.style.display = "block";
            x.style.fontSize = size + "px";
            first = false;
        })
    } else {
        size++;
        // for (let i = 0; i < 10; i++) {
        //     list[i].style.fontSize = size + "px";
        // }
        list.forEach(x => {
            x.style.fontSize = `${size}px`;
        });
    }
})