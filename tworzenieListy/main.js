let size = 10;
let orderElement = 1;

const init = () => {
    // storzenie elementów strony
    const btn = document.createElement("button");
    btn.textContent = "Dodaj 10 elementów listy";
    btn.style.fontSize = "28px";
    document.body.appendChild(btn);

    const btnReset = document.createElement("button");
    btnReset.textContent = "RESET";
    btnReset.style.fontSize = "28px";
    document.body.appendChild(btnReset);


    const ulE = document.createElement("ul");
    ulE.style.listStyle = "none";
    document.body.appendChild(ulE);

    btnReset.addEventListener("click", cleanList);

    btn.addEventListener("click", createLiElements);
}

const createLiElements = () => {

    for (let i = 0; i < 10; i++) {
        const liE = document.createElement("li");
        liE.textContent = `Element nr ${orderElement++}`;
        liE.style.fontSize = `${size++}px `;
        document.querySelector('ul').appendChild(liE);
    }

}
const cleanList = () => {
    document.querySelector("ul").textContent = "";
    size = 10;
    orderElement = 1;

}
init()