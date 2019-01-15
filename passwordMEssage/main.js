const input = document.getElementById('pass');
const div = document.querySelector('.message');
const passwords = ["user", "wiosna", "ania"];
const messages = ["wyjechałam", "piękna pora roku", "fajny styl masz"];


input.addEventListener('input', (e) => {
    div.textContent = "";
    // console.log(e.target.value);
    const text = e.target.value;

    passwords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index];
            e.target.value = "";
        }

    })


})


input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
})
input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})