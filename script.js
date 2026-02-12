const button = document.getElementById("btn");
const password = document.getElementById("password");
const image = document.getElementById("img");

const passwords = {"eevee": "sushi.png"}

button.addEventListener("click", () => {
    const password_text = password.value;
    if (password_text in passwords){
        const src = passwords[password_text];
        alert("Correct password found.")
        image.src = `images/${src}`;
        image.style.display = 'inline';
    }
    else{
        alert("Incorrect. Try again.");
    }
})