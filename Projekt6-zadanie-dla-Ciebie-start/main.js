const choise = ["wstań", "walcz", "nie poddawaj się"];

const addCh = document.querySelector('.add');
const show = document.querySelector('.showAdvice');
const h1 = document.querySelector('h1');

const addChoise = (e) => {
    e.preventDefault();
    h1.textContent = "";
    const input = document.querySelector('input');
    choise.push(input.value);
    input.value = "";
    alert(`dodana została opcja ${input.value}`);
}
const showChoise = (e) => {

    if (choise.length == 0) {
        h1.textContent = "NIe mam dla Ciebie żadnej rady";
        return
    } else {
        e.preventDefault();
        const index = Math.floor(Math.random() * choise.length);
        h1.textContent = choise[index];
    }
}


show.addEventListener('click', showChoise);
addCh.addEventListener('click', addChoise);
document.querySelector('.clean').addEventListener('click', function (e) {
    h1.textContent = "";
    e.preventDefault();
    choise.length = 0;

})
document.querySelector('.showOptions').addEventListener('click', function (e) {
    e.preventDefault();
    alert(choise.join(", "));
})