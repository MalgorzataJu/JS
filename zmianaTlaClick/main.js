document.body.addEventListener("click", (e) => {
    console.log(e.clientX, e.clientY);
    // console.log("2222");
    const x = e.clientX;
    const y = e.clientY;

    // if ((x % 2 == 0) & (y % 2 == 0)) {
    //     document.body.style.backgroundColor = "red";
    // } else if (!(x % 2 == 0) & !(y % 2 == 0)) {
    //     document.body.style.backgroundColor = "blue";
    // } else document.body.style.backgroundColor = "green";


    ((x % 2 == 0) & (y % 2 == 0)) ? document.body.style.backgroundColor = "red": (!(x % 2 == 0) & !(y % 2 == 0) ?
        document.body.style.backgroundColor = "blue" : document.body.style.backgroundColor = "green");
})