const h1 = document.querySelector('h1');
document.body.addEventListener("mousemove", function (e) {
    const x = e.clientX + 1;
    const y = e.clientY + 1;
    const width = window.innerWidth;
    const height = window.innerHeight;
    h1.textContent = `${x}, ${y}`
    // h1.textContent = `${e.clientX}, ${e.clientY}`;
    // h1.textContent = `${e.pageX}, ${e.pageY}`;
    // h1.textContent = `${e.screenX}, ${e.screenY}`;

    document.body.style.backgroundColor = `rgb(${x/width*100}%, ${y/height*100}%,${(x/width*100+y/height*100)/2}%)`


})